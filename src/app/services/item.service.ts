import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  constructor(private http: HttpClient) { }

  getJsonData(){
    return this.http.get<Item[]>('assets/data/produits.json');
  }
}
