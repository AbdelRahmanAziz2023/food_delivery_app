import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../components/common/CustomText';

import { Addon, Product } from '../../types/Product.type';
import AddonsSection from './AddonsSection';
import PriceRow from './PriceRow';

type Props = {
  product: Product;
  restaurantName?: string;
  restaurantLogo?: string;
  selectedAddons: string[];
  toggleAddon: (name: string) => void;
};

const ProductDetails = ({ product, restaurantName, restaurantLogo, selectedAddons, toggleAddon }: Props) => {
  const addonsTotal =
    product.addons?.filter(a => selectedAddons.includes(a.name)).reduce((sum, a) => sum + a.price, 0) || 0;

  return (
    <View style={styles.detailsCard}>
      <CustomText text={product.name} textStyle={styles.title} />

      {restaurantLogo && <Image source={{ uri: restaurantLogo }} style={styles.restaurantImage} />}
      <CustomText text={restaurantName ?? 'Restaurant'} textStyle={styles.restaurantName} />

      <CustomText text={product.description} textStyle={styles.description} />

      {product.addons?.length ? (
        <AddonsSection addons={product.addons} selectedAddons={selectedAddons} toggleAddon={toggleAddon} />
      ) : null}

      <PriceRow label="Base Price" value={`${product.price} EGP`} />
      {addonsTotal > 0 && <PriceRow label="Add-ons" value={`+${addonsTotal} EGP`} />}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  detailsCard: { marginTop: 250, padding: 24, backgroundColor: '#FFF' },
  title: { fontSize: 26, color: '#181C2E' },
  restaurantImage: { width: 28, height: 28, borderRadius: 50 },
  restaurantName: { fontSize: 15, color: '#181C2E', fontWeight: '500' },
  description: { fontSize: 15, color: '#70798C', lineHeight: 22, marginTop: 6 },
});

