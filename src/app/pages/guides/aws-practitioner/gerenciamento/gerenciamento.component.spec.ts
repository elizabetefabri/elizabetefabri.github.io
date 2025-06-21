import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoComponent } from './gerenciamento.component';

describe('GerenciamentoComponent', () => {
  let component: GerenciamentoComponent;
  let fixture: ComponentFixture<GerenciamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciamentoComponent]
    });
    fixture = TestBed.createComponent(GerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
