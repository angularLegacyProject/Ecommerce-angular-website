import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOrdreComponent } from './one-ordre.component';

describe('OneOrdreComponent', () => {
  let component: OneOrdreComponent;
  let fixture: ComponentFixture<OneOrdreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOrdreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOrdreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
