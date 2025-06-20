import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { GuidesComponent } from './pages/guides/guides.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/components/card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentesGuideModule } from './core/componentes-guides.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesMaterialModule } from './core/componentes-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    GuidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ComponentesMaterialModule,
    ComponentesGuideModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
