import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item';
import { BateauService } from 'src/app/services/bateau.service';
import { RecetteService } from 'src/app/services/recette.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  item: Item;
  categoryPath: string = '';
  bateaux: [] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bateauService: BateauService,
    private recetteService: RecetteService,
    private restaurantService: RestaurantService
  ) {
    this.item = {} as Item;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const id = this.router.getCurrentNavigation()?.extras.state?.['item'];
        let category =
          this.router.getCurrentNavigation()?.extras.state?.['category'];
        switch (category) {
          case 'bateau':
            this.categoryPath = 'assets/imgs/bateaux/';
            try {
              await this.bateauService.initialize();
              let bateau: any = await this.getBateau(id);
              if (bateau) {
                this.item['name'] = bateau?.nom;
                this.item['image'] = bateau?.img;
                this.item['description'] = bateau?.description;
              }
              console.log(this.item);
            } catch (error) {
              console.log(error);
            }
            break;
          case 'recette':
            this.categoryPath = 'assets/imgs/recettes/';
            try {
              await this.recetteService.initialize();
              let recette: any = await this.getRecette(id);
              if (recette) {
                this.item['name'] = recette?.nom;
                this.item['image'] = recette?.img;
                this.item['description'] = recette?.description;
              }
              console.log(this.item);
            } catch (error) {
              console.log(error);
            }
            break;
          case 'restaurant':
            this.categoryPath = 'assets/imgs/restaurants/';
            try {
              await this.restaurantService.initialize();
              let restaurant: any = await this.getRestaurant(id);
              if (restaurant) {
                this.item['name'] = restaurant?.nom;
                this.item['image'] = restaurant?.img;
                this.item['description'] = restaurant?.description;
              }
              console.log(this.item);
            } catch (error) {
              console.log(error);
            }
            break;
          default:
            console.log('error');

            break;
        }
      }
    });
  }

  async getBateau(id: number) {
    let res = this.bateauService.getBateaux();

    return res.find((bateau) => bateau.id === id);
  }

  async getRecette(id: number) {
    let res = this.recetteService.getRecettes();

    return res.find((recette) => recette.id === id);
  }

  async getRestaurant(id: number) {
    let res = this.restaurantService.getRestaurants();

    return res.find((restaurant) => restaurant.id === id);
  }
}
