import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWComponent } from './men-w.component';

describe('MenWComponent', () => {
  let component: MenWComponent;
  let fixture: ComponentFixture<MenWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
