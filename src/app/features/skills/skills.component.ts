import { Component } from '@angular/core';
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { SkillTagComponent } from "../../shared/components/skill-tag/skill-tag.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InfoCardComponent, SkillTagComponent, NgForOf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  // Lista de Habilidades con titulo(nombre) y iconos svg
  skills = [
    {
      name: 'HTML',
      icon: '/assets/icons/html.svg'
    },
    {
      name: 'CSS',
      icon: '/assets/icons/css.svg'
    }
    ,
    {
      name: 'TypeScript',
      icon: '/assets/icons/typescript.svg'
    },
    {
      name: 'JavaScript',
      icon: '/assets/icons/javascript.svg'
    },
      {
      name: 'MySQL',
      icon: '/assets/icons/mysql.svg'
    }
    ,
    {
      name: 'Git',
      icon: '/assets/icons/git.svg'
    }
    ,
    {
      name: 'GitHub',
      icon: '/assets/icons/github.svg'
    }
    ,
    {
      name: 'Angular',
      icon: '/assets/icons/angular.svg'
    }
  ]
}
