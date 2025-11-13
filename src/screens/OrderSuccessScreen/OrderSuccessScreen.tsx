import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import CustomText from '../../components/common/CustomText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/slices/CartSlice';

const OrderSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handleGoHome = () => {
    // Clear the cart
    dispatch(clearCart());
    // Navigate to home screen
    navigation.navigate('Home'); // replace with your home screen name
  };

  return (
    <View style={styles.container}>
      <CustomText
        text="🎉 Order Placed Successfully!"
        textStyle={styles.title}
      />
      <CustomText
        text="Thank you for your purchase. Your order is being processed."
        textStyle={styles.subtitle}
      />

      <CustomButton
        title="Go Home"
        onPress={handleGoHome}
        btnStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#FF7A00',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555',
  },
  button: {
    width: '80%',
    paddingVertical: 14,
  },
});

export default OrderSuccessScreen;
