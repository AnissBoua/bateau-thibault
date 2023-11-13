import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.item = {} as Item;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.item=this.router.getCurrentNavigation()?.extras.state?.['item'];
        console.log(this.item);
      }
    })
  }
  

}
