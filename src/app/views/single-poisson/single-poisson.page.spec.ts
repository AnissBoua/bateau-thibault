import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglePoissonPage } from './single-poisson.page';

describe('SinglePoissonPage', () => {
  let component: SinglePoissonPage;
  let fixture: ComponentFixture<SinglePoissonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinglePoissonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
