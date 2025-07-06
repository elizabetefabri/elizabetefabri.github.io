import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [
    NgFor,
    SlickCarouselModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  projetos = [
    {
      imagem: 'assets/img-slides/slide1.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide2.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide3.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide4.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
     {
      imagem: 'assets/img-slides/slide1.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide2.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide3.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
    {
      imagem: 'assets/img-slides/slide4.png',
      github: 'https://github.com/seuusuario/projeto1',
      site: 'https://seusite1.com'
    },
  ];

 slideConfig = {
  slidesToShow: 4,
  slidesToScroll: 1,

  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
}
