import { Component} from '@angular/core';

@Component({
    selector: 'app-personal-projects',
    imports: [],
    templateUrl: './personal-projects.html',
    styleUrl: './personal-projects.css',
})
export class PersonalProjects {
    projetosPessoais = [
        {
            titulo: 'Portfólio & Hub de Conteúdo',
            descricao: 'Aplicação Single Page (SPA) desenvolvida para centralizar projetos de engenharia e desenvolvimento, com foco em performance e design responsivo.',
            tecnologias: ['HTML', 'CSS', 'Typescript', 'Angular', 'bootstrap', 'Apache', 'Linux'],
            link: 'https://github.com/andrewpir/meu-site-pessoal',
            imagem: '/images/projects/PersonalPage.png'
        },
        {
            titulo: 'Bot Discord Piruleta',
            descricao: 'Um Robo feito para discord, usado em estudos de backend e comunicação com a API do Discord',
            tecnologias: ['Discord.js', 'Javascript', 'node.js'],
            link: 'https://github.com/andrewpir/Bot-Discord-Piruleta',
            imagem: '/images/projects/piruletabot.jpg'
        },
        {
            titulo: 'Site de prática',
            descricao: 'Um Site feito para pratica de html e css',
            tecnologias: ['HTML', 'CSS', 'Bootstrap'],
            link: 'https://github.com/andrewpir/pagina_de_estudos',
            imagem: '/images/projects/Sitedeestudos.png'
        },
        {
            titulo: 'Calculadora Basica',
            descricao: 'Uma Calculadora feita usando javascript, como um projeto pessoal.',
            tecnologias: ['Javascript', 'HTML', 'CSS'],
            link: 'https://github.com/andrewpir/Calculadora-Html-Js',
            imagem: '/images/projects/Calculadora-V001.png'
        }
        /*{
            titulo: 'Template',
            descricao: 'Descrição',
            tecnologias: ['Tecnologias', ''],
            link: '#',
            imagem: 'Image'
        }*/
    ];

}
