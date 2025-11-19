import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  standalone: false,
  templateUrl: './favorite-button.html',
  styleUrls: ['./favorite-button.css']
})
export class FavoriteButton {
  @Input() isFavorite: boolean = false;
}
