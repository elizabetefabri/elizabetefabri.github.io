import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraEscalaComponent } from './infra-escala.component';

describe('InfraEscalaComponent', () => {
  let component: InfraEscalaComponent;
  let fixture: ComponentFixture<InfraEscalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraEscalaComponent]
    });
    fixture = TestBed.createComponent(InfraEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
