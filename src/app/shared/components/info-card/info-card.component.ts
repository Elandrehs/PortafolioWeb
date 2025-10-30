import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {

  // Inputs de los textos que tendrán las cards
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() date?: string;
  @Input() description?: string;

  //Inputs para mostrar o no partes de las cards
  @Input() showHeader: boolean = false;
  @Input() showBodyTop: boolean = false;
}
