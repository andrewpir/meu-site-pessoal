import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { PersonalProjects } from './components/projects/personal-projects/personal-projects';
import { TeamProjects } from './components/projects/team-projects/team-projects';
import { Highlights } from './components/projects/highlights/highlights';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    {
        path: 'projects', component: Projects,
        children: [
            { path: 'pessoais', component: PersonalProjects },
            { path: 'equipe', component: TeamProjects },
            { path: 'destaques', component: Highlights },
            { path: '', redirectTo: 'destaques', pathMatch: 'full' }
        ]
    }
];
