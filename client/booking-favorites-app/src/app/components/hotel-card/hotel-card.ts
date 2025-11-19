import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-card',
  standalone: false,
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.css']
})
export class HotelCard {
  @Input() hotel!: Hotel;
  @Output() favoriteToggle = new EventEmitter<string>();

  onFavoriteClick(): void {
    this.favoriteToggle.emit(this.hotel.id);
  }
}
