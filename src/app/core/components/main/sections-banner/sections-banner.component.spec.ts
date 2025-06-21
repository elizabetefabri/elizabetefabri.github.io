import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsBannerComponent } from './sections-banner.component';

describe('SectionsBannerComponent', () => {
  let component: SectionsBannerComponent;
  let fixture: ComponentFixture<SectionsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsBannerComponent]
    });
    fixture = TestBed.createComponent(SectionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
