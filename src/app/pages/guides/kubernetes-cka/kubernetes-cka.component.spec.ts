import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesCkaComponent } from './kubernetes-cka.component';

describe('KubernetesCkaComponent', () => {
  let component: KubernetesCkaComponent;
  let fixture: ComponentFixture<KubernetesCkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KubernetesCkaComponent]
    });
    fixture = TestBed.createComponent(KubernetesCkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
