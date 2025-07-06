import { Component } from '@angular/core';
import { MainComponent } from './sections/main/main.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { GuidesComponent } from '../guides/guides.component';
import { SectionsServicosComponent } from './sections/main/sections-servicos/sections-servicos.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    ProjetosComponent,
    GuidesComponent,
    SectionsServicosComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
