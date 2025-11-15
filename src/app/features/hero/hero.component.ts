import { Component } from '@angular/core';
import { SocialButtonComponent } from "../../shared/components/social-button/social-button.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SocialButtonComponent, NgForOf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  // Lista de Medios Sociales, iconos .svg y links
  socials = [
    {
      icon: '/assets/icons/mail.svg',
      link: 'mailto:andrestheb@gmail.com'
    },
    {
      icon: '/assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/victor-andres-cruz-ibarra-26121838b/'
    },
    {
      icon: '/assets/icons/github.svg',
      link: 'https://github.com/Elandrehs'
    }
  ]
}
