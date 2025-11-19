import { Hotel } from '../models/hotel.model';

export const MOCK_HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'The Nittany Lion Inn',
    location: 'State College, PA',
    description: 'Elegant hotel on Penn State campus with modern amenities',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    price: 189,
    rating: 4.5,
    amenities: ['Free WiFi', 'Restaurant', 'Fitness Center'],
    isFavorite: true
  },
  {
    id: '2',
    name: 'Carnegie House',
    location: 'State College, PA',
    description: 'Boutique hotel with charming atmosphere near downtown',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    price: 159,
    rating: 4.7,
    amenities: ['Free Parking', 'Pet Friendly', 'Complimentary Breakfast'],
    isFavorite: true
  },
  {
    id: '3',
    name: 'Hyatt Place State College',
    location: 'State College, PA',
    description: 'Modern hotel with spacious rooms and great service',
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
    price: 145,
    rating: 4.3,
    amenities: ['Pool', 'Free WiFi', 'Business Center'],
    isFavorite: false
  }
];
