import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/home/sections/header/header.component';
import { FooterComponent } from './pages/home/sections/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      HeaderComponent,
      FooterComponent,
      SlickCarouselModule
    ]
})
export class AppComponent {
  title = 'frontend';
}
