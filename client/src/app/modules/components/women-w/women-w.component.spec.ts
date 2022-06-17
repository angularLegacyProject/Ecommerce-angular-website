import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWComponent } from './women-w.component';

describe('WomenWComponent', () => {
  let component: WomenWComponent;
  let fixture: ComponentFixture<WomenWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
