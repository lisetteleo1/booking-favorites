import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { LoginPage } from './pages/login-page/login-page';
import { HotelCard } from './components/hotel-card/hotel-card';
import { FavoriteButton } from './components/favorite-button/favorite-button';

@NgModule({
  declarations: [
    App,
    FavoritesPage,
    LoginPage,
    HotelCard,
    FavoriteButton
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
