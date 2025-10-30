import { Component } from '@angular/core';
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
