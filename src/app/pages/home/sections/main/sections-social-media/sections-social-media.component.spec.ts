import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsSocialMediaComponent } from './sections-social-media.component';

describe('SectionsSocialMediaComponent', () => {
  let component: SectionsSocialMediaComponent;
  let fixture: ComponentFixture<SectionsSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsSocialMediaComponent]
    });
    fixture = TestBed.createComponent(SectionsSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
