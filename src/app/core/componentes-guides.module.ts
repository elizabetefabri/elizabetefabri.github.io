import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentesMaterialModule } from '../core/componentes-material.module';

import { AmazonS3Component } from '../pages/guides/aws-practitioner/amazon-s3/amazon-s3.component';
import { ArmazenamentoEc2Component } from '../pages/guides/aws-practitioner/armazenamento-ec2/armazenamento-ec2.component';
import { AwsPractitionerComponent } from '../pages/guides/aws-practitioner/aws-practitioner.component';
import { BalanceamentoDimensionamentoComponent } from '../pages/guides/aws-practitioner/balanceamento-dimensionamento/balanceamento-dimensionamento.component';
import { ComputacaoNuvemComponent } from '../pages/guides/aws-practitioner/computacao-nuvem/computacao-nuvem.component';
import { Ec2Component } from '../pages/guides/aws-practitioner/ec2/ec2.component';
import { IamComponent } from '../pages/guides/aws-practitioner/iam/iam.component';
import { MapaMentalComponent } from '../pages/guides/aws-practitioner/mapa-mental/mapa-mental.component';
import { AwsSolutionsArchitectComponent } from '../pages/guides/aws-solutions-architect/aws-solutions-architect.component';
import { DatadogComponent } from '../pages/guides/datadog/datadog.component';
import { KubernetesCkaComponent } from '../pages/guides/kubernetes-cka/kubernetes-cka.component';
import { RouterModule } from '@angular/router';
import { DbAnalyticsComponent } from '../pages/guides/aws-practitioner/db-analytics/db-analytics.component';
import { InfraEscalaComponent } from '../pages/guides/aws-practitioner/infra-escala/infra-escala.component';
import { InfraGlobalComponent } from '../pages/guides/aws-practitioner/infra-global/infra-global.component';
import { IntegracaoNuvemComponent } from '../pages/guides/aws-practitioner/integracao-nuvem/integracao-nuvem.component';
import { MonitoramentoComponent } from '../pages/guides/aws-practitioner/monitoramento/monitoramento.component';
import { VpcComponent } from '../pages/guides/aws-practitioner/vpc/vpc.component';
import { SegurancaComponent } from '../pages/guides/aws-practitioner/seguranca/seguranca.component';
import { GerenciamentoComponent } from '../pages/guides/aws-practitioner/gerenciamento/gerenciamento.component';
import { IdentidadeComponent } from '../pages/guides/aws-practitioner/identidade/identidade.component';

@NgModule({
  declarations: [
    AwsPractitionerComponent,
    AwsSolutionsArchitectComponent,
    ComputacaoNuvemComponent,
    MapaMentalComponent,
    IamComponent,
    Ec2Component,
    ArmazenamentoEc2Component,
    BalanceamentoDimensionamentoComponent,
    AmazonS3Component,
    KubernetesCkaComponent,
    DatadogComponent,
    DbAnalyticsComponent,
    InfraEscalaComponent,
    InfraGlobalComponent,
    IntegracaoNuvemComponent,
    MonitoramentoComponent,
    VpcComponent,
    SegurancaComponent,
    GerenciamentoComponent,
    IdentidadeComponent
  ],
  imports: [
    CommonModule,
    ComponentesMaterialModule,
    RouterModule
  ]
})
export class ComponentesGuideModule { }
