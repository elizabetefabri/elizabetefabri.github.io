import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmazenamentoEc2Component } from './armazenamento-ec2.component';

describe('ArmazenamentoEc2Component', () => {
  let component: ArmazenamentoEc2Component;
  let fixture: ComponentFixture<ArmazenamentoEc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmazenamentoEc2Component]
    });
    fixture = TestBed.createComponent(ArmazenamentoEc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
