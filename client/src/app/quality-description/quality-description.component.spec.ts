import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDescriptionComponent } from './quality-description.component';

describe('QualityDescriptionComponent', () => {
  let component: QualityDescriptionComponent;
  let fixture: ComponentFixture<QualityDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
