import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsPractitionerComponent } from './aws-practitioner.component';

describe('AwsPractitionerComponent', () => {
  let component: AwsPractitionerComponent;
  let fixture: ComponentFixture<AwsPractitionerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsPractitionerComponent]
    });
    fixture = TestBed.createComponent(AwsPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
