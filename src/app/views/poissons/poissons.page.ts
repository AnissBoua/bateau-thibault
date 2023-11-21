import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-poissons',
  templateUrl: './poissons.page.html',
  styleUrls: ['./poissons.page.scss'],
})
export class PoissonsPage implements OnInit {
 categories: any[] =[
  {
    id: 0,
    name: "Poissons"
  },
  {
    id: 1,
    name: "Coquillages"
  },
  {
    id: 2,
    name: "Crustacés"
  },
  {
    id: 3,
    name: "Promotions"
  },
 ]

// dico : any ={
//   0 : "Poissons",
//   1 : "Coquillage",
//   2 : "Crustacés",
//   3 : "Promotions"
// }
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
  }

  onLoadPoisson(categorie :{id: number, name : string}) {
    let navigationExtras: NavigationExtras = {
      state: {
        categorie : categorie
      }
    };
    this.router.navigate(['tabs/single-categorie'],navigationExtras);
  }
}
