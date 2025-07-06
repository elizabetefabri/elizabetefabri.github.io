import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-sobre',
  templateUrl: './sections-sobre.component.html',
  styleUrls: ['./sections-sobre.component.css'],
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
