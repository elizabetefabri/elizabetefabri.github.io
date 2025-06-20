import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMentalComponent } from './mapa-mental.component';

describe('MapaMentalComponent', () => {
  let component: MapaMentalComponent;
  let fixture: ComponentFixture<MapaMentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaMentalComponent]
    });
    fixture = TestBed.createComponent(MapaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
