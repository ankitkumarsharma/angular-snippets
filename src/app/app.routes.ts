import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'accordian-dynamic', loadComponent: () => import('./components/accordian/accordian-same-content/accordian-same-content').then(m => m.AccordianSameContent)},
    {path: 'accordian-custom', loadComponent: () => import('./components/accordian/accordian-custum-content/accordian-custum-content').then(m => m.AccordianCustumContent)},
    {path: 'tabs', loadComponent: () => import('./components/tabs/tabs').then(m => m.Tabs)},
    {path: 'filter-list', loadComponent: () => import('./components/filter-list/filter-list').then(m => m.FilterList)}
];
