import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Restaurant } from '../types/Restaurant.type';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllRestaurants = async () => {
    try {
      setIsLoading(true);
      const snapshot = await firestore().collection('restaurants').get();
      const data: Restaurant[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Restaurant[];
      setRestaurants(data);
    } catch (err: any) {
      console.error('Error fetching restaurants:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return { restaurants, isLoading, error };
};
