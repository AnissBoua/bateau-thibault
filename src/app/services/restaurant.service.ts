import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    try {
      const response = await fetch('assets/data/restaurants.json');
      this.restaurants = (await response.json()) as Restaurant[];
    } catch (error) {
      console.warn(error);
    }
  }

  fetchRestaurants() {
    return this.http.get<Restaurant[]>('assets/data/restaurants.json');
  }

  getRestaurants() {
    return this.restaurants;
  }
}
