import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
})
export class GuideCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() image!: string;
}
