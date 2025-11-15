import { Component } from '@angular/core';
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
