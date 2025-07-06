import { Component } from '@angular/core';
import { DivComponent } from '../div/div.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [
      DivComponent,
      CommonModule,
      RouterModule
    ],
    standalone: true
})
export class HeaderComponent {
  menuActive = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }


  closeMenu() {
    this.menuActive = false;
  }

}
