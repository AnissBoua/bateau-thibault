import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleCategoriePage } from './single-categorie.page';

describe('SingleCategoriePage', () => {
  let component: SingleCategoriePage;
  let fixture: ComponentFixture<SingleCategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
