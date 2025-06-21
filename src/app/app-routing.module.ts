import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AwsPractitionerComponent } from './pages/guides/aws-practitioner/aws-practitioner.component';
import { MapaMentalComponent } from './pages/guides/aws-practitioner/mapa-mental/mapa-mental.component';
import { ComputacaoNuvemComponent } from './pages/guides/aws-practitioner/computacao-nuvem/computacao-nuvem.component';
import { IamComponent } from './pages/guides/aws-practitioner/iam/iam.component';
import { Ec2Component } from './pages/guides/aws-practitioner/ec2/ec2.component';
import { ArmazenamentoEc2Component } from './pages/guides/aws-practitioner/armazenamento-ec2/armazenamento-ec2.component';
import { BalanceamentoDimensionamentoComponent } from './pages/guides/aws-practitioner/balanceamento-dimensionamento/balanceamento-dimensionamento.component';
import { AmazonS3Component } from './pages/guides/aws-practitioner/amazon-s3/amazon-s3.component';
import { AwsSolutionsArchitectComponent } from './pages/guides/aws-solutions-architect/aws-solutions-architect.component';
import { DatadogComponent } from './pages/guides/datadog/datadog.component';
import { KubernetesCkaComponent } from './pages/guides/kubernetes-cka/kubernetes-cka.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aws-practitioner', component: AwsPractitionerComponent },
  { path: 'aws-solutions-architect', component: AwsSolutionsArchitectComponent },
  { path: 'datadog', component: DatadogComponent },
  { path: 'kubernetes-cka', component: KubernetesCkaComponent },
  { path: 'mapa', component: MapaMentalComponent },
  { path: 'computacao-nuvem', component: ComputacaoNuvemComponent },
  { path: 'iam', component: IamComponent },
  { path: 'ec2', component: Ec2Component },
  { path: 'storage-ec2', component: ArmazenamentoEc2Component },
  { path: 'balanceamento', component: BalanceamentoDimensionamentoComponent },
  { path: 's3', component: AmazonS3Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
