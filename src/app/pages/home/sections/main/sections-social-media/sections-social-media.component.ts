import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sections-social-media',
    templateUrl: './sections-social-media.component.html',
    styleUrls: ['./sections-social-media.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class SectionsSocialMediaComponent  implements OnInit {
  @Input()
  imageGit:string = ""
  @Input()
  linkGit:string = ""

  @Input()
  imageLinkedin:string = ""
  @Input()
  linkLinkedin:string = ""

  @Input()
  imageEmail:string = ""
  @Input()
  linkEmail:string = ""

  @Input()
  imageDownload:string = ""
  @Input()
  linkDownload:string = ""

  constructor() {}
  ngOnInit(): void {

  }
}
