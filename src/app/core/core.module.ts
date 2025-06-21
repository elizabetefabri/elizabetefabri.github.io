import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DivComponent } from './components/div/div.component';
import { BrowserModule } from '@angular/platform-browser';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { GuideCardComponent } from '../shared/components/guide-card/guide-card.component';
import { MainComponent } from './components/main/main.component';
import { SectionsBannerComponent } from './components/main/sections-banner/sections-banner.component';
import { SectionsSobreComponent } from './components/main/sections-sobre/sections-sobre.component';
import { SectionsSkillsComponent } from './components/main/sections-skills/sections-skills.component';
import { SectionsContatoComponent } from './components/main/sections-contato/sections-contato.component';
import { SectionsSocialMediaComponent } from './components/main/sections-social-media/sections-social-media.component';
import { SectionsServicosComponent } from './components/main/sections-servicos/sections-servicos.component';
import { BtnGithubComponent } from './components/btn/btn-github/btn-github.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DivComponent,
    SocialMediaComponent,
    GuideCardComponent,
    MainComponent,
    SectionsBannerComponent,
    SectionsSobreComponent,
    SectionsSkillsComponent,
    SectionsContatoComponent,
    SectionsSocialMediaComponent,
    SectionsServicosComponent,
    BtnGithubComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GuideCardComponent,
    HeaderComponent,
    FooterComponent,
    DivComponent,
    SocialMediaComponent,
    GuideCardComponent,
    MainComponent,
    SectionsBannerComponent,
    SectionsSobreComponent,
    SectionsSkillsComponent,
    SectionsContatoComponent,
    SectionsSocialMediaComponent,
    SectionsServicosComponent,
    BtnGithubComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
