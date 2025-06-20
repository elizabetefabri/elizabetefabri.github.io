import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonS3Component } from './amazon-s3.component';

describe('AmazonS3Component', () => {
  let component: AmazonS3Component;
  let fixture: ComponentFixture<AmazonS3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonS3Component]
    });
    fixture = TestBed.createComponent(AmazonS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
