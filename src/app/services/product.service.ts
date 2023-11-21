import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product [] =[]
  constructor(private http: HttpClient) {
  }
  async initialize() {
    try {
      const response = await fetch('assets/data/products.json');
      this.products = (await response.json()) as Product[];
    } catch (error) {
      console.warn(error);
    }
  }
  fetchProducts() {
    return this.http.get<Product[]>('assets/data/products.json');
  }
  getProducts() {
    return this.products;
  }
}
