import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-favorites-page',
  standalone: false,
  templateUrl: './favorites-page.html',
  styleUrls: ['./favorites-page.css']
})
export class FavoritesPage implements OnInit {
  favoriteHotels: Hotel[] = [];
  isLoading: boolean = true;
  error: string = '';

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsService.getAllHotels().subscribe({
      next: (hotels) => {
        // Mark all as favorites for demo
        this.favoriteHotels = hotels.map(hotel => ({...hotel, isFavorite: true}));
        this.isLoading = false;
        console.log('Loaded hotels:', this.favoriteHotels);
      },
      error: (err) => {
        console.error('Error loading hotels:', err);
        this.error = 'Unable to load hotels. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  onFavoriteToggle(hotelId: string): void {
    console.log('Favorite toggled:', hotelId);
  }
}
