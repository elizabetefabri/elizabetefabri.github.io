import { Component, Input } from '@angular/core';
import type { SocialMediaLink } from 'src/app/shared/models/social-media.model';

@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.css'],
    standalone: false
})
export class SocialMediaComponent {
  @Input() contatoTitle = "";
  @Input() links: SocialMediaLink[] = [];
}
