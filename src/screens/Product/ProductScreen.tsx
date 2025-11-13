import React from 'react';
import {
  ScrollView,
  Image,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useProduct } from '../../hooks/useProduct';
import { useRestaurant } from '../../hooks/useRestaurant';

import ProductHeader from './ProductHeader';
import ProductDetails from './ProductDetails';
import ProductBottomBar from './ProductBottomBar';
import { useProductScreen } from '../../hooks/useProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomError from '../../components/common/CustomError';

type ProductRouteParams = {
  Product: { restaurantId: string; productId: string };
};

const ProductScreen = ({ navigation }: any) => {
  const route = useRoute<RouteProp<ProductRouteParams, 'Product'>>();
  const { restaurantId, productId } = route.params;

  const { product, loading, error } = useProduct(restaurantId, productId);
  const { restaurant } = useRestaurant(restaurantId);

  const {
    selectedAddons,
    quantity,
    totalPrice,
    handleToggleAddon,
    setQuantity,
    handleAddToCart,
  } = useProductScreen(product!);

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#EEA682" />
      </View>
    );
  if (error)
    return <CustomError title="Error" message="Failed to fetch product" />;
  
  if (!product)
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Product not found</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <ProductHeader
          onBack={() => navigation.goBack()}
          onFavorite={() => {}}
        />
        <ProductDetails
          product={product}
          restaurantName={restaurant?.name}
          restaurantLogo={restaurant?.logo}
          selectedAddons={selectedAddons}
          toggleAddon={handleToggleAddon}
        />
      </ScrollView>
      <ProductBottomBar
        totalPrice={totalPrice}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
      />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
    zIndex: -1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});
