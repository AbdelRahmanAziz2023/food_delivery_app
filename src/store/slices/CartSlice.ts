import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Addon, Product } from '../../types/Product.type';

export interface CartItem extends Product {
  quantity: number;
  selectedAddons: Addon[];
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const calculateItemTotal = (item: CartItem): number => {
  const addonsTotal =
    item.selectedAddons?.reduce((sum, addon) => sum + addon.price, 0) || 0;
  return (item.price + addonsTotal) * item.quantity;
};

const updateCartTotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.totalPrice, 0);

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; selectedAddons?: Addon[] }>,
    ) => {
      const { product, selectedAddons = [] } = action.payload;

      const existingItem = state.items.find(
        item =>
          item.id === product.id &&
          JSON.stringify(item.selectedAddons) ===
            JSON.stringify(selectedAddons),
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = calculateItemTotal(existingItem);
      } else {
        const newItem: CartItem = {
          ...product,
          quantity: 1,
          selectedAddons,
          totalPrice: calculateItemTotal({
            ...product,
            quantity: 1,
            selectedAddons,
          }),
        };
        state.items.push(newItem);
      }

      state.totalPrice = updateCartTotal(state.items);
    },

    removeFromCart: (
      state,
      action: PayloadAction<{
        id: string | undefined;
        selectedAddons?: Addon[];
      }>,
    ) => {
      const { id, selectedAddons = [] } = action.payload;

      state.items = state.items.filter(
        item =>
          !(
            item.id === id &&
            JSON.stringify(item.selectedAddons) ===
              JSON.stringify(selectedAddons)
          ),
      );

      state.totalPrice = updateCartTotal(state.items);
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{
        id: string | undefined;
        selectedAddons?: Addon[];
      }>,
    ) => {
      const { id, selectedAddons = [] } = action.payload;

      const existingItem = state.items.find(
        item =>
          item.id === id &&
          JSON.stringify(item.selectedAddons) ===
            JSON.stringify(selectedAddons),
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice = calculateItemTotal(existingItem);
        } else {
          state.items = state.items.filter(
            item =>
              !(
                item.id === id &&
                JSON.stringify(item.selectedAddons) ===
                  JSON.stringify(selectedAddons)
              ),
          );
        }
      }

      state.totalPrice = updateCartTotal(state.items);
    },

    clearCart: state => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
