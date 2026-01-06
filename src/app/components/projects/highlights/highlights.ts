import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css',
})
export class Highlights {
    destaques = [
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
        },
        {
            titulo: 'Template3',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        }
    ];
}
