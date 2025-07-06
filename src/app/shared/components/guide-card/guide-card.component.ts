import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-guide-card',
    templateUrl: './guide-card.component.html',
    styleUrls: ['./guide-card.component.css'],
    standalone: false
})
export class GuideCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() image!: string;
}
