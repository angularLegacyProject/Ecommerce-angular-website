import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetailsAdComponent } from './proddetails-ad.component';

describe('ProddetailsAdComponent', () => {
  let component: ProddetailsAdComponent;
  let fixture: ComponentFixture<ProddetailsAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProddetailsAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProddetailsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
