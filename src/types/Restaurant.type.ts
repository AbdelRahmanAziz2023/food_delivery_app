// models/Restaurant.ts

export interface Address {
  city: string;
  street: string;
  lat: number;
  lng: number;
}

export interface Restaurant {
  id?: string; // optional Firestore or database ID
  name: string;
  description: string;
  category: string[];
  logo: string;
  coverImage: string;
  address: Address;
  rating: number;
  totalRatings: number;
  deliveryFee: number;
  deliveryTime: number;
  minOrder: number;
  isOpen: boolean;
}
