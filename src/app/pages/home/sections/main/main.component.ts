import { Component } from '@angular/core';
import { SectionsBannerComponent } from './sections-banner/sections-banner.component';
import { SectionsSobreComponent } from './sections-sobre/sections-sobre.component';
import { SectionsSkillsComponent } from './sections-skills/sections-skills.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SectionsBannerComponent,
    SectionsSobreComponent,
    SectionsSkillsComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}
