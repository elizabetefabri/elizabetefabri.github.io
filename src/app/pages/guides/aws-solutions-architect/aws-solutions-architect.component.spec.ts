import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsSolutionsArchitectComponent } from './aws-solutions-architect.component';

describe('AwsSolutionsArchitectComponent', () => {
  let component: AwsSolutionsArchitectComponent;
  let fixture: ComponentFixture<AwsSolutionsArchitectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsSolutionsArchitectComponent]
    });
    fixture = TestBed.createComponent(AwsSolutionsArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
