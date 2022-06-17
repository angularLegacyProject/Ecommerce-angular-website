import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorAdComponent } from './decor-ad.component';

describe('DecorAdComponent', () => {
  let component: DecorAdComponent;
  let fixture: ComponentFixture<DecorAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
