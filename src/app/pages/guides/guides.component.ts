import { Component } from '@angular/core';

@Component({
    selector: 'app-guides',
    templateUrl: './guides.component.html',
    styleUrls: ['./guides.component.css'],
    standalone: false
})
export class GuidesComponent {
guides = [
  {
    title: 'Guia de estudo AWS Cloud Practitioner',
    description: 'Aprenda os conceitos fundamentais de AWS.',
    link: '/aws-practitioner',
    image: 'assets/icons/practitioner.png'
  },
  {
    title: 'Guia de estudo AWS Solutions Architect',
    description: 'Estude para a certificação AWS Solutions Architect Associate.',
    link: '/aws-solutions-architect',
    image: 'assets/icons/solutions-architect.png'
  },
  {
    title: 'Guia de estudo Kubernetes CKA',
    description: 'Domine Kubernetes, deploy, serviços e clusters.',
    link: '/kubernetes-cka',
    image: 'assets/icons/cka.png'
  },
  {
    title: 'Guia de estudo Datadog',
    description: 'Automatize sua observabilidade e monitore sua infraestrutura.',
    link: '/datadog',
    image: 'assets/icons/datadog-foudations.png'
  }
];

}
