import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputacaoNuvemComponent } from './computacao-nuvem.component';

describe('ComputacaoNuvemComponent', () => {
  let component: ComputacaoNuvemComponent;
  let fixture: ComponentFixture<ComputacaoNuvemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputacaoNuvemComponent]
    });
    fixture = TestBed.createComponent(ComputacaoNuvemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
