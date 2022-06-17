import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWatchesComponent } from './m-watches.component';

describe('MWatchesComponent', () => {
  let component: MWatchesComponent;
  let fixture: ComponentFixture<MWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
