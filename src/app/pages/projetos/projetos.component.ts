import { Component } from '@angular/core';
import { CarrosselComponent } from './sections/carrossel/carrossel.component'; // importe direto
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CarrosselComponent,
    CommonModule,
    RouterModule,
    SlickCarouselModule
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

}
