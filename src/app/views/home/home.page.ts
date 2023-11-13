import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  goToList(target: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        list: target,
      },
    };
    this.router.navigate(['/tabs/list'], navigationExtras);
  }
}
