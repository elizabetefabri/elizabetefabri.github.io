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
    DatadogComponent
  ],
  imports: [
    CommonModule,
    ComponentesMaterialModule
  ]
})
export class ComponentesGuideModule { }
