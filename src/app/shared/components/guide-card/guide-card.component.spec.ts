import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCardComponent } from './guide-card.component';

describe('GuideCardComponent', () => {
  let component: GuideCardComponent;
  let fixture: ComponentFixture<GuideCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideCardComponent]
    });
    fixture = TestBed.createComponent(GuideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
