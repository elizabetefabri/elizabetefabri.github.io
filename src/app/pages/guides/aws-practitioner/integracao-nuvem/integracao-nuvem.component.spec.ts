import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracaoNuvemComponent } from './integracao-nuvem.component';

describe('IntegracaoNuvemComponent', () => {
  let component: IntegracaoNuvemComponent;
  let fixture: ComponentFixture<IntegracaoNuvemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegracaoNuvemComponent]
    });
    fixture = TestBed.createComponent(IntegracaoNuvemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
