import { Component } from '@angular/core';

@Component({
  selector: 'app-team-projects',
  imports: [],
  templateUrl: './team-projects.html',
  styleUrl: './team-projects.css',
})
export class TeamProjects {
    projetosPessoais = [
        {
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        },
        {
            titulo: 'Template1',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        },
        {
            titulo: 'Template2',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        }
    ];
}
