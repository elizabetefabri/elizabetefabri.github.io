import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sections-contato',
    templateUrl: './sections-contato.component.html',
    styleUrls: ['./sections-contato.component.css'],
    standalone: false
})
export class SectionsContatoComponent {
  @Input()
  contatoTitle: string = '';

  constructor() {}
  ngOnInit(): void {}
}
