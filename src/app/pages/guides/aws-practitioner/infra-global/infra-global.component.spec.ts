import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraGlobalComponent } from './infra-global.component';

describe('InfraGlobalComponent', () => {
  let component: InfraGlobalComponent;
  let fixture: ComponentFixture<InfraGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraGlobalComponent]
    });
    fixture = TestBed.createComponent(InfraGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
