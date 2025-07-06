import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sections-contato',
    templateUrl: './sections-contato.component.html',
    styleUrls: ['./sections-contato.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsContatoComponent {
  @Input()
  contatoTitle: string = '';

  constructor() {}
  ngOnInit(): void {}
}
