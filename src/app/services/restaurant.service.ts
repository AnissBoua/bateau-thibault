import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {
    this.fetchRestaurants().subscribe(
      (restaurants) => {
        this.restaurants = restaurants;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchRestaurants() {
    return this.http.get<Restaurant[]>('assets/data/restaurants.json');
  }

  getRestaurants() {
    return this.restaurants;
  }
}
