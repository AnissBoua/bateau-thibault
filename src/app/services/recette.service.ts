import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  recettes: Recette[] = [];

  constructor(private http: HttpClient) {
    this.fetchRecettes().subscribe(
      (recettes) => {
        this.recettes = recettes;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchRecettes() {
    return this.http.get<Recette[]>('assets/data/recettes.json');
  }

  getRecettes() {
    return this.recettes;
  }
}
