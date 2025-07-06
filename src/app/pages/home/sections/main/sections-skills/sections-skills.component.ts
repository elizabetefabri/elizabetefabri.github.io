import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Skill {
  img: string;
  link: string;
  alt: string;
}
@Component({
    selector: 'app-sections-skills',
    templateUrl: './sections-skills.component.html',
    styleUrls: ['./sections-skills.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsSkillsComponent implements OnInit {
  @Input() titleSkills: string = '';

  @Input() skills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
