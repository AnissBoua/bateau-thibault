import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  recettes: Recette[] = [];

  constructor(private http: HttpClient) {
    this.initialize();
  }

  async initialize() {
    try {
      const response = await fetch('assets/data/recettes.json');
      this.recettes = (await response.json()) as Recette[];
    } catch (error) {
      console.warn(error);
    }
  }

  fetchRecettes() {
    return this.http.get<Recette[]>('assets/data/recettes.json');
  }

  getRecettes() {
    return this.recettes;
  }
}
