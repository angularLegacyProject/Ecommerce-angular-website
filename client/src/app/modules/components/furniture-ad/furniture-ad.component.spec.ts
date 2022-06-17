import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAdComponent } from './furniture-ad.component';

describe('FurnitureAdComponent', () => {
  let component: FurnitureAdComponent;
  let fixture: ComponentFixture<FurnitureAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
