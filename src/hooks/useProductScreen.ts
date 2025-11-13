// useProductScreen.ts
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../store/slices/CartSlice';
import { Product } from '../types/Product.type';
import { calculateTotalPrice, getSelectedAddons, toggleAddon } from '../screens/Product/ProductController';
import Toast from 'react-native-toast-message';

export const useProductScreen = (product?: Product) => {
  const dispatch = useDispatch();
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleToggleAddon = (name: string) => setSelectedAddons(prev => toggleAddon(prev, name));

  const handleAddToCart = () => {
    if (!product) return;
    const addons = getSelectedAddons(product, selectedAddons);
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({ product, selectedAddons: addons }));
    }
    Toast.show({
            type: 'info',
            text1: 'Cart updated',
            text2: 'Your item has been added to cart',
          });
  };

  const totalPrice = product ? calculateTotalPrice(product, selectedAddons, quantity) : 0;

  return { selectedAddons, quantity, totalPrice, handleToggleAddon, setQuantity, handleAddToCart };
};
