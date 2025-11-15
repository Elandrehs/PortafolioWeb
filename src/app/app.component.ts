import { Component } from '@angular/core';
import { AboutComponent } from "./features/about/about.component";
import { EducationComponent } from "./features/education/education.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { HeroComponent } from "./features/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, EducationComponent, SkillsComponent, ProjectsComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
