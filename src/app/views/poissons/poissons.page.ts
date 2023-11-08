import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-poissons',
  templateUrl: './poissons.page.html',
  styleUrls: ['./poissons.page.scss'],
})
export class PoissonsPage implements OnInit {
  poissonsCategorie =[
    {
      name :"Poissons"
    },
    {
      name :"Coquillages"
    },
    {
      name :"Crustacés"
    },

    {
      name :"Promotions"
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadPoisson(name :string) {
    let navigationExtras: NavigationExtras = {
      state: {
        poissonsName : name
      }
    };
  }
}
