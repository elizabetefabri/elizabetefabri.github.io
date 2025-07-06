import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

// Módulos convertidos em standalone (material, layout, projetos, guides)
// import { ComponentesMaterialModule } from './app/componentes-material/componentes-material.module';
// import { ComponentesProjetosModule } from './app/modules/componentes-projetos/componentes-projetos.module';
// import { ComponentesGuideModule } from './app/modules/componentes-guide/componentes-guide.module';
// import { ComponentesLayoutModule } from './app/modules/componentes-layout/componentes-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
  ]
});
