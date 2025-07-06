import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentesMaterialModule } from '../componentes-material/componentes-material.module';

import { AmazonS3Component } from 'src/app/pages/guides/aws-practitioner/amazon-s3/amazon-s3.component';
import { ArmazenamentoEc2Component } from 'src/app/pages/guides/aws-practitioner/armazenamento-ec2/armazenamento-ec2.component';
import { AwsPractitionerComponent } from 'src/app/pages/guides/aws-practitioner/aws-practitioner.component';
import { BalanceamentoDimensionamentoComponent } from 'src/app/pages/guides/aws-practitioner/balanceamento-dimensionamento/balanceamento-dimensionamento.component';
import { ComputacaoNuvemComponent } from 'src/app/pages/guides/aws-practitioner/computacao-nuvem/computacao-nuvem.component';
import { DbAnalyticsComponent } from 'src/app/pages/guides/aws-practitioner/db-analytics/db-analytics.component';
import { Ec2Component } from 'src/app/pages/guides/aws-practitioner/ec2/ec2.component';
import { GerenciamentoComponent } from 'src/app/pages/guides/aws-practitioner/gerenciamento/gerenciamento.component';
import { IamComponent } from 'src/app/pages/guides/aws-practitioner/iam/iam.component';
import { IdentidadeComponent } from 'src/app/pages/guides/aws-practitioner/identidade/identidade.component';
import { InfraEscalaComponent } from 'src/app/pages/guides/aws-practitioner/infra-escala/infra-escala.component';
import { InfraGlobalComponent } from 'src/app/pages/guides/aws-practitioner/infra-global/infra-global.component';
import { IntegracaoNuvemComponent } from 'src/app/pages/guides/aws-practitioner/integracao-nuvem/integracao-nuvem.component';
import { MapaMentalComponent } from 'src/app/pages/guides/aws-practitioner/mapa-mental/mapa-mental.component';
import { MonitoramentoComponent } from 'src/app/pages/guides/aws-practitioner/monitoramento/monitoramento.component';
import { SegurancaComponent } from 'src/app/pages/guides/aws-practitioner/seguranca/seguranca.component';
import { VpcComponent } from 'src/app/pages/guides/aws-practitioner/vpc/vpc.component';
import { AwsSolutionsArchitectComponent } from 'src/app/pages/guides/aws-solutions-architect/aws-solutions-architect.component';
import { DatadogComponent } from 'src/app/pages/guides/datadog/datadog.component';
import { KubernetesCkaComponent } from 'src/app/pages/guides/kubernetes-cka/kubernetes-cka.component';

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
