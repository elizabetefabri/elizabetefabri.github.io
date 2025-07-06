import { Component, Input } from '@angular/core';
import type { SocialMediaLink } from 'src/app/shared/models/social-media.model';
import { DivComponent } from '../div/div.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [
      DivComponent,
      SocialMediaComponent,
      CommonModule,
      RouterModule
    ]
})
export class FooterComponent {
  @Input() footerCopyright = "Copyright © 2025";
  @Input() footerTextoLink = "Elizabete de Sousa Fabri";
  @Input() footerCopyright2 = '"Nada substitui a persistência, nem mesmo o talento."';

  socialLinks: SocialMediaLink[] = [
    {
      image: "../../../assets/icons/github.png",
      link: "https://github.com/elizabetefabri",
      alt: "GITHUB",
      title: "Bora ver meus projetos no GitHub 🖤"
    },
    {
      image: "../../../assets/icons/linkedin.png",
      link: "https://www.linkedin.com/in/elizabetefabri/",
      alt: "LINKEDIN",
      title: "Acesse meu Linkedin 💙"
    },
    {
      image: "../../../assets/icons/email.png",
      link: "mailto:elizabetesousafabri@gmail.com",
      alt: "EMAIL",
      title: "Mande um E-mail 📩"
    },
    {
      image: "../../../assets/icons/download.png",
      link: "https://www.canva.com/design/DAGnEUyrgX8/pIJFgpBm91fm_UuJtTXcLg/edit?utm_content=DAGnEUyrgX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",  // Preencha com o link de download, se houver.
      alt: "Download",
      title: "Faça o download aqui do meu currículo 💌"
    }
  ];
}
