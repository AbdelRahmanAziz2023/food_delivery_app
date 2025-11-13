import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import CartBottom from './CartBottom';
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  CartItem as CartItemType,
} from '../../store/slices/CartSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const [editMode, setEditMode] = useState(false);

  const handleIncrease = (item: CartItemType) => {
    dispatch(addToCart({ product: item, selectedAddons: item.selectedAddons }));
  };

  const handleDecrease = (item: CartItemType) => {
    dispatch(
      decreaseQuantity({ id: item.id, selectedAddons: item.selectedAddons }),
    );
  };

  const handleRemove = (item: CartItemType) => {
    dispatch(
      removeFromCart({ id: item.id, selectedAddons: item.selectedAddons }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CartHeader editMode={editMode} setEditMode={setEditMode} />

      <FlatList
        data={items}
        keyExtractor={item => item.id + JSON.stringify(item.selectedAddons)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            editMode={editMode}
            onRemove={() => handleRemove(item)}
            onIncrease={() => handleIncrease(item)}
            onDecrease={() => handleDecrease(item)}
          />
        )}
      />
      <CartBottom total={totalPrice} cartItems={items} />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0F',
    paddingTop: 20,
  },
  listStyle: {
    flexGrow: 1,
    paddingBottom: 20,
    gap: 20,
  },
});
