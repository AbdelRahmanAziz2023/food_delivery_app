import { useState, useEffect } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { RootState } from '../store/store';

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export const useCartPayment = (
  total: number,
  cartItems: CartItem[] = [],
  address: string,
  navigation: any
) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const userId = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const [sheetInitialized, setSheetInitialized] = useState(false);

  const API_URL = 'http://192.168.1.38:4242';

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentMethodType: 'card',
        currency: 'usd',
        amount: Math.round(total * 100),
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`PaymentIntent creation failed: ${text}`);
    }

    const { clientSecret, ephemeralKey, customer } = await response.json();
    return { paymentIntent: clientSecret, ephemeralKey, customer };
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();
      if (!paymentIntent) return;

      const { error } = await initPaymentSheet({
        merchantDisplayName: 'Example, Inc.',
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: { name: 'Jane Doe' },
      });

      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Payment Error',
          text2: 'Failed to initialize payment sheet',
        });
      } else {
        setSheetInitialized(true);
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Payment Error',
        text2: 'Could not initialize payment',
      });
    }
  };

  const handlePlaceOrder = async () => {
    if (!sheetInitialized) {
      Toast.show({
        type: 'info',
        text1: 'Please wait',
        text2: 'Payment sheet is loading...',
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await presentPaymentSheet();
      if (error) {
        Toast.show({
          type: 'error',
          text1: `Error code: ${error.code}`,
          text2: error.message,
        });
      } else {
        // Payment succeeded
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Your order is confirmed!',
        });

        // Save order to Firestore
        await firestore().collection('orders').add({
          uId: userId,
          address,
          total,
          currency: 'USD',
          createdAt: firestore.FieldValue.serverTimestamp(),
          status: 'pending',
          items: cartItems.map(item => ({
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        });

        navigation.navigate('OrderSuccess');
      }
    } catch (err: any) {
      console.error(err);
      Toast.show({
        type: 'error',
        text1: 'Payment Error',
        text2: 'Something went wrong during payment',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return { loading, handlePlaceOrder, sheetInitialized };
};
