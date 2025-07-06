import { Component, Input, OnInit } from '@angular/core';

export interface Skill {
  img: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-sections-skills',
  templateUrl: './sections-skills.component.html',
  styleUrls: ['./sections-skills.component.css'],
})
export class SectionsSkillsComponent implements OnInit {
  @Input() titleSkills: string = '';

  @Input() skills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
