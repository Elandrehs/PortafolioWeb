import { Component } from '@angular/core';
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { ProjectCardComponent } from "../../shared/components/project-card/project-card.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfoCardComponent, ProjectCardComponent, NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'VetLink',
      description: 'Aplicación web que simula una tienda virtual con gestión de usuarios, compras y saldo digital.',
      githubUrl: 'https://github.com/Elandrehs/Vetlink'
    },
    {
      title: 'CoinApp',
      description: 'Plataforma web que simula una red social mediante publicaciones, comentarios y reacciones en tiempo real.',
      githubUrl: 'https://github.com/Elandrehs/CoinApp'
    }
  ];
}