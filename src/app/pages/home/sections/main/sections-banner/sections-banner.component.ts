import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-banner',
  templateUrl: './sections-banner.component.html',
  styleUrls: ['./sections-banner.component.css'],
})
export class SectionsBannerComponent {
  @Input()
  bannerTitle: string = '';
  @Input()
  bannerDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
