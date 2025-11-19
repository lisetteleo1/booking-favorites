import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { MOCK_HOTELS } from '../../data/mock-hotels';

@Component({
  selector: 'app-favorites-page',
  standalone: false,
  templateUrl: './favorites-page.html',
  styleUrls: ['./favorites-page.css']
})
export class FavoritesPage implements OnInit {
  favoriteHotels: Hotel[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.favoriteHotels = MOCK_HOTELS.filter(hotel => hotel.isFavorite);
      this.isLoading = false;
    }, 500);
  }

  onFavoriteToggle(hotelId: string): void {
    const hotel = this.favoriteHotels.find(h => h.id === hotelId);
    if (hotel) {
      hotel.isFavorite = !hotel.isFavorite;
      if (!hotel.isFavorite) {
        this.favoriteHotels = this.favoriteHotels.filter(h => h.id !== hotelId);
      }
    }
  }
}
