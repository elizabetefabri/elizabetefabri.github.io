import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadogComponent } from './datadog.component';

describe('DatadogComponent', () => {
  let component: DatadogComponent;
  let fixture: ComponentFixture<DatadogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatadogComponent]
    });
    fixture = TestBed.createComponent(DatadogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
