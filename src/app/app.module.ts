import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GuidesComponent } from './pages/guides/guides.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/components/card/card.component';

import { ComponentesGuideModule } from './modules/componentes-guides/componentes-guides.module';
import { ComponentesMaterialModule } from './modules/componentes-material/componentes-material.module';
import { ComponentesProjetosModule } from './modules/componentes-projetos/componentes-projetos.module';
import { ComponentesLayoutModule } from './modules/componentes-layout/componentes-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    GuidesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentesMaterialModule,
    ComponentesGuideModule,
    ComponentesProjetosModule,
    ComponentesLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
