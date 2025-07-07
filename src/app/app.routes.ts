import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'accordian', loadComponent: () => import('./components/accordian/accordian').then(m => m.Accordian)},
    {path: 'tabs', loadComponent: () => import('./components/tabs/tabs').then(m => m.Tabs)},
    {path: 'filter-list', loadComponent: () => import('./components/filter-list/filter-list').then(m => m.FilterList)}
];
