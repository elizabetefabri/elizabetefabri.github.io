import { Component, Input } from '@angular/core';
import type { SocialMediaLink } from 'src/app/shared/models/social-media.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
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
      link: "",  // Preencha com o link de download, se houver.
      alt: "Download",
      title: "Faça o download aqui do meu currículo 💌"
    }
  ];
}
