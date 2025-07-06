import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sections-sobre',
    templateUrl: './sections-sobre.component.html',
    styleUrls: ['./sections-sobre.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsSobreComponent {
  @Input()
  sobreTitle: string = '';
  @Input()
  sobreDescription: string = '';
  @Input()
  sobrePhoto: string = '';

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
