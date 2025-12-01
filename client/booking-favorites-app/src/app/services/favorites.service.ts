import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = `${environment.apiUrl}/favorites`;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getUserFavorites(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addFavorite(hotelId: string): Observable<any> {
    return this.http.post(this.apiUrl, { hotelId }, { headers: this.getHeaders() });
  }

  removeFavorite(hotelId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${hotelId}`, { headers: this.getHeaders() });
  }
}
