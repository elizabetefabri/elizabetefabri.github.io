import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { SocialMediaLink } from 'src/app/shared/models/social-media.model';

@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SocialMediaComponent {
  @Input() contatoTitle = "";
  @Input() links: SocialMediaLink[] = [];
}
