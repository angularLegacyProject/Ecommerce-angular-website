import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWatchesComponent } from './w-watches.component';

describe('WWatchesComponent', () => {
  let component: WWatchesComponent;
  let fixture: ComponentFixture<WWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
