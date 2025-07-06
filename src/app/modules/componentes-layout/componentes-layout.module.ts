import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from '../../pages/home/sections/main/main.component';
import { DivComponent } from '../../pages/home/sections/div/div.component';
import { SocialMediaComponent } from '../../pages/home/sections/social-media/social-media.component';
import { FooterComponent } from '../../pages/home/sections/footer/footer.component';
import { HeaderComponent } from '../../pages/home/sections/header/header.component';
import { SectionsBannerComponent } from '../../pages/home/sections/main/sections-banner/sections-banner.component';
import { SectionsContatoComponent } from '../../pages/home/sections/main/sections-contato/sections-contato.component';
import { SectionsServicosComponent } from '../../pages/home/sections/main/sections-servicos/sections-servicos.component';
import { SectionsSkillsComponent } from '../../pages/home/sections/main/sections-skills/sections-skills.component';
import { SectionsSobreComponent } from '../../pages/home/sections/main/sections-sobre/sections-sobre.component';
import { SectionsSocialMediaComponent } from '../../pages/home/sections/main/sections-social-media/sections-social-media.component';
import { GuideCardComponent } from 'src/app/shared/components/guide-card/guide-card.component';
import { ComponentesMaterialModule } from '../componentes-material/componentes-material.module';

@NgModule({
  declarations: [
    MainComponent,
    DivComponent,
    SocialMediaComponent,
    FooterComponent,
    HeaderComponent,
    GuideCardComponent,
    SectionsBannerComponent,
    SectionsContatoComponent,
    SectionsServicosComponent,
    SectionsSkillsComponent,
    SectionsSobreComponent,
    SectionsSocialMediaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesMaterialModule
  ],
  exports: [
    MainComponent,
    DivComponent,
    SocialMediaComponent,
    FooterComponent,
    HeaderComponent,
    GuideCardComponent,
    SectionsBannerComponent,
    SectionsContatoComponent,
    SectionsServicosComponent,
    SectionsSkillsComponent,
    SectionsSobreComponent,
    SectionsSocialMediaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesLayoutModule { }
