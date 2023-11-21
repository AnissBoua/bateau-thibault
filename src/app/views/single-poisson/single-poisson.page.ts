import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { StorageService } from 'src/app/services/storage.service';
import { CartItem } from 'src/app/models/cartItem';


@Component({
  selector: 'app-single-poisson',
  templateUrl: './single-poisson.page.html',
  styleUrls: ['./single-poisson.page.scss'],
})
export class SinglePoissonPage implements OnInit {
  item: Product;
  categoryPath: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router, private productService : ProductService,
    private storage: StorageService) {
    this.item = {} as Product;
   }

  ngOnInit() {
    this.item = this.router.getCurrentNavigation()?.extras.state?.['produit'];
  }

  async getProduct(id: number) {
    let res = this.productService.getProducts();

    return res.find((produit) => produit.id === id);
  }

  ajoutPanier(produit: Product) {
    const cartItem: CartItem = {
      product: produit,
      quantity: 1
    }

    this.storage.get('products').then(products => {
      if (products) {
        const product = products.find((p: CartItem) => p.product.id === produit.id);
        if (product) {
          product.quantity++;
        } else {
          products.push(cartItem);
        }
        this.storage.set('products', products);
      } else {
        this.storage.set('products', [cartItem]);
      }
      this.router.navigate(['/panier']);
    })
  }
}
