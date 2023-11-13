import { Injectable } from '@angular/core';
import { Bateau } from '../models/bateau';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BateauService {
  bateaux: Bateau[] = [];

  constructor(private http: HttpClient) {
    this.fetchBateaux().subscribe(
      (bateaux) => {
        this.bateaux = bateaux;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchBateaux() {
    return this.http.get<Bateau[]>('assets/data/bateaux.json');
  }

  getBateaux() {
    return this.bateaux;
  }
}
