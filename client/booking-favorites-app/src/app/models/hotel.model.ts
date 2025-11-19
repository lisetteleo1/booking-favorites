export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  amenities?: string[];
  isFavorite?: boolean;
}

export interface Favorite {
  id: string;
  userId: string;
  hotelId: string;
  createdAt: Date;
}
