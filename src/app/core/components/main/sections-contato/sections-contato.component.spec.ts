import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsContatoComponent } from './sections-contato.component';

describe('SectionsContatoComponent', () => {
  let component: SectionsContatoComponent;
  let fixture: ComponentFixture<SectionsContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsContatoComponent]
    });
    fixture = TestBed.createComponent(SectionsContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
