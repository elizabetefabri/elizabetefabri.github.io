import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsSkillsComponent } from './sections-skills.component';

describe('SectionsSkillsComponent', () => {
  let component: SectionsSkillsComponent;
  let fixture: ComponentFixture<SectionsSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsSkillsComponent]
    });
    fixture = TestBed.createComponent(SectionsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
