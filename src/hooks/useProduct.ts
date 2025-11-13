import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product.type';

export const useProduct = (restaurantId: string, productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProduct = async () => {
    try {
      setLoading(true);
      const snapshot = await firestore()
        .collection('restaurants')
        .doc(restaurantId)
        .collection('menu')
        .doc(productId)
        .get();

      if (await snapshot.exists) {
        setProduct({ id: snapshot.id, ...snapshot.data() } as Product);
      } else {
        setError('Product not found');
      }
    } catch (err: any) {
      console.error('Error fetching product:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (restaurantId && productId) {
      getProduct();
    }
  }, [restaurantId, productId]);

  return { product, loading, error };
};
