// hooks/useRestaurant.ts
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Restaurant } from '../types/Restaurant.type';
import { Product } from '../types/Product.type';

export const useRestaurant = (id: string) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getRestaurant = async () => {
    try {
      setLoading(true);
      const snapshot = await firestore()
        .collection('restaurants')
        .doc(id)
        .get();
      if (await snapshot.exists) {
        setRestaurant({ id: snapshot.id, ...snapshot.data() } as Restaurant);
      } else {
        setError('Restaurant not found');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getMenuItems = async () => {
    try {
      const snapshot = await firestore()
        .collection('restaurants')
        .doc(id)
        .collection('menu')
        .get();

      const items = snapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() } as Product),
      );
      setMenuItems(items);
    } catch (err: any) {
      console.error('Error fetching menu:', err);
    }
  };

  useEffect(() => {
    getRestaurant();
    getMenuItems();
  }, [id]);

  return { restaurant, menuItems, loading, error };
};
