export interface Addon {
  name: string;
  price: number;
}

export interface Product {
  id?: string; // optional, in case you get it from Firestore doc.id
  name: string;
  restaurantId: string;
  description: string;
  image: string;
  price: number;
  category: string;
  isAvailable: boolean;
  addons: Addon[];
}
