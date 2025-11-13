// PriceRow.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../components/common/CustomText';

type Props = { label: string; value: string };

const PriceRow = ({ label, value }: Props) => (
  <View style={styles.priceRow}>
    <CustomText text={label} textStyle={styles.label} />
    <CustomText text={value} textStyle={styles.priceValue} />
  </View>
);

export default PriceRow;

const styles = StyleSheet.create({
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  label: { fontSize: 15, color: '#70798C' },
  priceValue: { fontSize: 15, color: '#181C2E', fontWeight: '600' },
});
