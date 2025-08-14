import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { ComponentContainer } from './layout/component-container/component-container';
import { Auth } from './auth/auth';
import { AuthGuard } from './auth/core/auth.guard';
import { PageNotFound } from './layout/page-not-found/page-not-found';
import { SnippetItem } from './snippets/snippet-item/snippet-item';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'dashboard', canActivate: [AuthGuard], loadComponent: () => import('./user/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'add-snippet', canActivate: [AuthGuard], loadComponent: () => import('./snippets/add-snippet/add-snippet').then(m => m.AddSnippet) },
    { path: 'snippets/:userid/:id', component: SnippetItem, children: [
        { path: 'accordian-dynamic', data: {username:'ankit123'}, loadComponent: () => import('./components/accordian/accordian-same-content/accordian-same-content').then(m => m.AccordianSameContent) },
        { path: 'accordian-custom', data: {username:'ankit123'}, loadComponent: () => import('./components/accordian/accordian-custum-content/accordian-custum-content').then(m => m.AccordianCustumContent) },
        { path: 'tabs', data: {username:'anu1'}, loadComponent: () => import('./components/tabs/tabs').then(m => m.Tabs) },
        { path: 'filter-list', data: {username:'anu1'}, loadComponent: () => import('./components/filter-list/filter-list').then(m => m.FilterList) },
    ]},
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
        path: 'auth', component: Auth,
        children: [
            { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
            { path: 'sign-up', loadComponent: () => import('./auth/sign-up/sign-up').then(m => m.SignUp) },
        ]
    },
    { path: '**', component: PageNotFound },
];
