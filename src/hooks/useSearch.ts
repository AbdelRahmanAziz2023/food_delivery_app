import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Restaurant } from '../types/Restaurant.type';
import { Product } from '../types/Product.type';



export const useSearch = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const searchAll = async (query: string) => {
    setLoading(true);

    try {
      // Search Restaurants
      const restaurantSnap = await firestore()
        .collection('restaurants')
        .orderBy('name')
        .startAt(query)
        .endAt(query + '\uf8ff')
        .get();

      const restaurantResults = restaurantSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Restaurant[];

      // Search Products
      const productSnap = await firestore()
        .collection('menu')
        .orderBy('name')
        .startAt(query)
        .endAt(query + '\uf8ff')
        .get();

      const productResults = productSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      setRestaurants(restaurantResults);
      setProducts(productResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return { restaurants, products, loading, searchAll };
};
