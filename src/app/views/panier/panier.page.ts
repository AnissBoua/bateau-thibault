import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CartItem } from 'src/app/models/cartItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  products: CartItem[] = [];
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('products').then(product => {
      this.products = product || [];
    });
  }

  plus(product: CartItem) {
    product.quantity++;
    this.storage.set('products', this.products);
  }

  minus(product: CartItem) {
    if (product.quantity > 1) {
      product.quantity--;
      this.storage.set('products', this.products);
    } else {
      this.remove(product);
    }
  }

  remove(product: CartItem) {
    this.products = this.products.filter(p => p.product.id !== product.product.id);
    this.storage.set('products', this.products);
  }

  total() {
    return this.products.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
  }

  valider() {
    this.storage.set('products', []);
    this.products = [];
    this.router.navigate(['/tabs/home']);
  }
}
