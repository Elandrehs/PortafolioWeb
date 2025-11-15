import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {
    @Input() href: string = '';
    @Input() source: string = '';
}
