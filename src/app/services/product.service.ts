import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(
      'http://51.255.166.155:1352/tig/products/?format=json'
    );
  }
}
