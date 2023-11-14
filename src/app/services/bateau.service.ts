import { Injectable } from '@angular/core';
import { Bateau } from '../models/bateau';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BateauService {
  bateaux: Bateau[] = [];

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    try {
      const response = await fetch('assets/data/bateaux.json');
      this.bateaux = (await response.json()) as Bateau[];
    } catch (error) {
      console.warn(error);
    }
  }

  fetchBateaux() {
    return this.http.get<Bateau[]>('assets/data/bateaux.json');
  }

  getBateaux() {
    return this.bateaux;
  }
}
