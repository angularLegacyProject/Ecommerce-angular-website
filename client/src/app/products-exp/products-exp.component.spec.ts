import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsExpComponent } from './products-exp.component';

describe('ProductsExpComponent', () => {
  let component: ProductsExpComponent;
  let fixture: ComponentFixture<ProductsExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
