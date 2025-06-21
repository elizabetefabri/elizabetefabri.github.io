import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsServicosComponent } from './sections-servicos.component';

describe('SectionsServicosComponent', () => {
  let component: SectionsServicosComponent;
  let fixture: ComponentFixture<SectionsServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsServicosComponent]
    });
    fixture = TestBed.createComponent(SectionsServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
