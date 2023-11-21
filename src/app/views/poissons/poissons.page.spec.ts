import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoissonsPage } from './poissons.page';
import { ProductService } from 'src/app/services/product.service';

describe('PoissonsPage', () => {
  let component: PoissonsPage;
  let fixture: ComponentFixture<PoissonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoissonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
