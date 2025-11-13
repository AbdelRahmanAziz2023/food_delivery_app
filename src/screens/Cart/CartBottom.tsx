import { View, StyleSheet, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import CustomText from '../../components/common/CustomText';
import CustomTextField from '../../components/common/CustomTextField';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCartPayment } from '../../hooks/useCartPayment';

type Props = {
  total: number;
  cartItems?: any[];
};

const CartBottom = ({ total, cartItems = [] }: Props) => {
  const navigation = useNavigation<any>();
  const [address, setAddress] = useState('2118 Thornridge Cir. Syracuse');

  const { loading, handlePlaceOrder } = useCartPayment(
    total,
    cartItems,
    address,
    navigation
  );

  return (
    <View style={styles.footerContainer}>
      <View style={styles.deliveryHeader}>
        <CustomText text="Delivery Address" textStyle={styles.deliveryLabel} />
        <CustomText text="Edit" textStyle={styles.deliveryEdit} />
      </View>

      <CustomTextField
        value={address}
        onChangeText={setAddress}
        placeholder="Enter delivery address"
        name={''}
      />

      <View style={styles.totalRow}>
        <CustomText text="Total =>" textStyle={styles.totalLabel} />
        <CustomText text={`${total} USD`} textStyle={styles.totalValue} />
      </View>

      <CustomButton
        title={loading ? 'Processing...' : 'Place Order'}
        onPress={handlePlaceOrder}
        btnStyle={styles.placeOrderButton}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          color="#FF7A00"
          style={{ marginTop: 16 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },
  deliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  deliveryLabel: { color: '#777', fontSize: 14 },
  deliveryEdit: { color: '#FF7A00', fontSize: 14 },
  totalRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 16 },
  totalLabel: { color: '#777' },
  totalValue: { fontSize: 18 },
  placeOrderButton: { marginTop: 16 },
});

export default CartBottom;
