import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsSobreComponent } from './sections-sobre.component';

describe('SectionsSobreComponent', () => {
  let component: SectionsSobreComponent;
  let fixture: ComponentFixture<SectionsSobreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsSobreComponent]
    });
    fixture = TestBed.createComponent(SectionsSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
