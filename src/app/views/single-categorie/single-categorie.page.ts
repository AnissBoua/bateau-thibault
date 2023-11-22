import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

import { NavigationExtras, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-categorie',
  templateUrl: './single-categorie.page.html',
  styleUrls: ['./single-categorie.page.scss'],
})
export class SingleCategoriePage implements OnInit {

  observable: Observable<Product[]> = new Observable;
  produits: Product[] = [];
  category : any = {
    0 : "Poissons",
    1 : "Coquillage",
    2 : "Crustacés",
    3 : "Promotions"
  }
  categoryId: number = 1;
  produitsParCategorie: { [key: number]: { name: string, price: number }[] } = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.categoryId = this.router.getCurrentNavigation()?.extras.state?.['item'];
        console.log(this.categoryId);
    
        this.http.get<Product[]>('assets/data/products.json').subscribe(
          res => {
            this.produits = res.filter((product)=> product.category === this.categoryId);
          },
          err => console.warn(err)
        );
      }
    });
  }

  onLoadPoisson(produit : Product) {
    let navigationExtras: NavigationExtras = {
      state: {
        produit : produit
      }
    };
    this.router.navigate(['/tabs/single-poisson'], navigationExtras);
  }
}
