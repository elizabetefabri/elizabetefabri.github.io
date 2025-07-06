import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Markmap } from 'markmap-view';

@Component({
    selector: 'app-mapa-mental',
    templateUrl: './mapa-mental.component.html',
    styleUrls: ['./mapa-mental.component.css'],
    standalone: false
})
export class MapaMentalComponent implements AfterViewInit {
  @ViewChild('markmap') container!: ElementRef;

  ngAfterViewInit(): void {
    const markdown = `
# Datadog - Mind Map dos Cursos

- **Habilidades Básicas**
  - Trilha de Aprendizado de Habilidades Básicas
  - Fundação Datadog
  - Introdução à Observabilidade
  - Introdução aos Dashboards
  - Início Rápido com Datadog

- **Monitoramento e Métricas**
  - Começando com Monitores
  - Começando com Métricas
  - Personalizar Notificações de Alertas do Monitor
  - Criando Métricas Personalizadas com DogStatsD

- **Logs e Tagging**
  - Começando com o Explorador de Logs
  - Melhores Práticas de Tagging

- **Infraestrutura e Rede**
  - Começando com Monitoramento de Infraestrutura e Rede na Nuvem
  - O Agente em Docker
  - O Agente em um Host

- **Integrações e Automação**
  - Começando com Integrações
  - Criar uma Integração com o Agente
  - API Datadog: Automação e Infraestrutura como Código

- **Desenvolvimento e APM**
  - Datadog 101: Desenvolvedor
  - Datadog 101: Engenheiro de Confiabilidade de Sites (SRE)
  - Começando com Métricas e Traces APM

- **Monitoramento Especializado**
  - Monitorando um Cluster Kubernetes: Instalando o Agente
  - Introdução ao Monitoramento da AWS
    `;

    Markmap.create(this.container.nativeElement);
  }
}
