import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DivComponent } from './components/div/div.component';
import { BrowserModule } from '@angular/platform-browser';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DivComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
