// ProductController.ts
import { Addon } from '../../types/Product.type';
import { Product } from '../../types/Product.type';

export const toggleAddon = (selectedAddons: string[], addonName: string) => {
  return selectedAddons.includes(addonName)
    ? selectedAddons.filter(name => name !== addonName)
    : [...selectedAddons, addonName];
};

export const calculateTotalPrice = (product: Product, selectedAddons: string[], quantity: number) => {
  const addonsTotal =
    product.addons
      ?.filter(a => selectedAddons.includes(a.name))
      .reduce((sum, a) => sum + a.price, 0) ?? 0;

  return (product.price + addonsTotal) * quantity;
};

export const getSelectedAddons = (product: Product, selectedAddons: string[]) => {
  return product.addons?.filter(a => selectedAddons.includes(a.name)) || [];
};
