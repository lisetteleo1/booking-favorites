import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { HotelCard } from './components/hotel-card/hotel-card';
import { FavoriteButton } from './components/favorite-button/favorite-button';

@NgModule({
  declarations: [
    App,
    FavoritesPage,
    HotelCard,
    FavoriteButton
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
