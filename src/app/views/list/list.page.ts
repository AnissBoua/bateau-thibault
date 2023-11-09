import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BateauService } from 'src/app/services/bateau.service';
import { Bateau } from 'src/app/models/bateau';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Recette } from 'src/app/models/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  page: string = 'List';
  listImg: string = 'assets/imgs/boat.png';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bateauService: BateauService,
    private restaurantService: RestaurantService,
    private recetteService: RecetteService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.page = this.router.getCurrentNavigation()?.extras.state?.['list'];

        switch (this.page) {
          case 'Bateaux':
            this.listImg = 'assets/imgs/boat.png';
            break;
          case 'Restaurants':
            this.listImg = 'assets/imgs/restaurant.jpg';
            break;
          case 'Recettes':
            this.listImg = 'assets/imgs/recipe.jpg';
            break;
          default:
            console.warn('Page not found');
        }
      }
    });
  }

  getBateaux(): Bateau[] {
    return this.bateauService.getBateaux();
  }

  getRestaurants(): Restaurant[] {
    return this.restaurantService.getRestaurants();
  }

  getRecettes(): Recette[] {
    return this.recetteService.getRecettes();
  }
}
