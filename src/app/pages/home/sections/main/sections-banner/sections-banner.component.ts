import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sections-banner',
    templateUrl: './sections-banner.component.html',
    styleUrls: ['./sections-banner.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsBannerComponent {
  @Input()
  bannerTitle: string = '';
  @Input()
  bannerDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
