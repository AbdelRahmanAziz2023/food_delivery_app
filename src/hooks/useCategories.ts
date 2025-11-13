import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

export type Category = {
  id: string;
  name: string;
  image?: string;
};

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllCategories = async () => {
    try {
      setIsLoading(true);
      const snapshot = await firestore().collection('category').get();
      const data: Category[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Category[];
      setCategories(data);
    } catch (err: any) {
      console.error('Error fetching categories:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return { categories, isLoading, error };
};
