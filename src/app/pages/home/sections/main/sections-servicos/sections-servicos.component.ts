import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sections-servicos',
    templateUrl: './sections-servicos.component.html',
    styleUrls: ['./sections-servicos.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsServicosComponent {

}
