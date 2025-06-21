import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGithubComponent } from './btn-github.component';

describe('BtnGithubComponent', () => {
  let component: BtnGithubComponent;
  let fixture: ComponentFixture<BtnGithubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnGithubComponent]
    });
    fixture = TestBed.createComponent(BtnGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
