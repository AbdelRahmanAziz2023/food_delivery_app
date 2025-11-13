import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../components/common/CustomText';
import PlusMinusButtons from '../../components/common/PlusMinusButtons';
import CustomButton from '../../components/common/CustomButton';

type Props = { totalPrice: number; quantity: number; onQuantityChange: (val: number) => void; onAddToCart: () => void };

const ProductBottomBar = ({ totalPrice, quantity, onQuantityChange, onAddToCart }: Props) => (
  <View style={styles.bottomCard}>
    <View style={styles.bottomRow}>
      <CustomText text={`${totalPrice} EGP`} textStyle={styles.totalPrice} />
      <PlusMinusButtons value={quantity} onChange={onQuantityChange} />
    </View>
    <CustomButton title="Add to Cart" onPress={onAddToCart} />
  </View>
);

export default ProductBottomBar;

const styles = StyleSheet.create({
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  totalPrice: { fontSize: 22, color: '#181C2E', fontWeight: '700' },
});
