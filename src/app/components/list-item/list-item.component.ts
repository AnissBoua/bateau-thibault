import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: number = 0;
  @Input() text: string = '';
  @Input() img: string = '';
  @Input() page: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  goToItem(target: number) {
    console.log('/tabs/' + this.page, target);
    let navigationExtras: NavigationExtras = {
      state: {
        item: target,
      },
    };
    this.router.navigate(['/tabs/' + this.page], navigationExtras);
  }
}
