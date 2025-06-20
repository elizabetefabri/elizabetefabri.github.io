import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceamentoDimensionamentoComponent } from './balanceamento-dimensionamento.component';

describe('BalanceamentoDimensionamentoComponent', () => {
  let component: BalanceamentoDimensionamentoComponent;
  let fixture: ComponentFixture<BalanceamentoDimensionamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceamentoDimensionamentoComponent]
    });
    fixture = TestBed.createComponent(BalanceamentoDimensionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
