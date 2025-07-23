import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { ComponentContainer } from './layout/component-container/component-container';
import { Auth } from './authentication/auth/auth';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {
        path: 'snippets', component: ComponentContainer, children: [
            { path: 'accordian-dynamic', loadComponent: () => import('./components/accordian/accordian-same-content/accordian-same-content').then(m => m.AccordianSameContent) },
            { path: 'accordian-custom', loadComponent: () => import('./components/accordian/accordian-custum-content/accordian-custum-content').then(m => m.AccordianCustumContent) },
            { path: 'tabs', loadComponent: () => import('./components/tabs/tabs').then(m => m.Tabs) },
            { path: 'filter-list', loadComponent: () => import('./components/filter-list/filter-list').then(m => m.FilterList) },
        ]
    },
    { path: 'contact-us', loadComponent: () => import('./layout/contact-us/contact-us').then(m => m.ContactUs) },
    { 
        path: 'auth', loadComponent: () => import('./authentication/auth/auth').then(m => m.Auth),
        children: [
            { path: 'login', loadComponent: () => import('./authentication/login/login').then(m => m.Login) },
            { path: 'sign-up', loadComponent: () => import('./authentication/sign-up/sign-up').then(m => m.SignUp) },
        ]
    },
];
