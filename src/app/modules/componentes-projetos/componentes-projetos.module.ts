import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from '../../pages/projetos/projetos.component';
import { RouterModule } from '@angular/router';
import { ComponentesMaterialModule } from '../componentes-material/componentes-material.module';

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesMaterialModule
  ],
  exports: [
    ProjetosComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesProjetosModule { }
