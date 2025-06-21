import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbAnalyticsComponent } from './db-analytics.component';

describe('DbAnalyticsComponent', () => {
  let component: DbAnalyticsComponent;
  let fixture: ComponentFixture<DbAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbAnalyticsComponent]
    });
    fixture = TestBed.createComponent(DbAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
