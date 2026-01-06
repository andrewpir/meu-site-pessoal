import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalProjects } from './personal-projects/personal-projects';
import { TeamProjects } from './team-projects/team-projects';

@Component({
    selector: 'app-projects',
    imports: [RouterModule],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
})
export class Projects {
    /*projetosPessoais = [
        {
            titulo: 'Site de prática',
            descricao: 'Um Site feito para pratica de html e css',
            tecnologias: ['HTML', 'CSS', 'Bootstrap'],
            link: 'https://github.com/...',
            imagem: '/images/projects/Sitedeestudos.png'
        },
        {
            titulo: 'Calculadora Basica',
            descricao: 'Uma Calculadora feita usando javascript, como um projeto pessoal.',
            tecnologias: ['Javascript', 'HTML', 'CSS'],
            link: 'https://github.com/andrewpir/Calculadora-Html-Js',
            imagem: '/images/projects/Calculadora-V001.png'
        },
        {
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        },
        {
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        },
        {
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        },
        {
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        }
    ];*/

}
