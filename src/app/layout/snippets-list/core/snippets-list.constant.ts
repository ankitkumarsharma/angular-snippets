import { LABELS } from "../../../core/app.constant";
import { CardDetailsModel } from "../../../core/app.models";
export const SNIPPETS_LIST = [
    {
        name: 'Filter List',
        url: `${LABELS.snippets}/filter-list`,
        title: 'Filter List Component',
        image: '../assets/img/filter.jpg',
        description: 'A filter list component that allows you to filter items based on a clcik event term.',
        tags: ['Angular 20','Filter','Reusable'],
        demo: true
    },
    {
        name: 'Dynamic Accordian',
        url: `${LABELS.snippets}/accordian-dynamic`,
        title: 'Dynamic Accordian Component',
        image: '../assets/img/filter.jpg',
        description: 'An accordian component that allows you to expand and collapse sections of content.',
        tags: ['Angular 20','Accordian','Dynamic','Reusable'],
        demo: true
    },
    {
        name: 'Dynamic Accordian with Custom items',
        url: `${LABELS.snippets}/accordian-custom`,
        title: 'Dynamic Accordian with Custom items',
        image: '../assets/img/filter.jpg',
        description: 'An accordian component that allows you to expand and collapse sections of content.',
        tags: ['Angular 20','Accordian','Dynamic','Reusable','Forms'],
        demo: true
    },
    {
        name: 'Tabs',
        url: `${LABELS.snippets}/tabs`,
        title: 'Tabs Component',
        image: '../assets/img/filter.jpg',
        description: 'A tabs component that allows you to switch between different sections of content.',
        tags: ['Angular 20','Tabs','Dynamic','Reusable'],
        demo: false
    },
    {
        name: 'CRUD - Operations',
        url: '/',
        title: 'CRUD - Operations',
        image: '../assets/img/filter.jpg',
        description: 'How we can do CRUD operation static or dynamic in Angular with basic validations.',
        tags: ['Angular 20','CRUD','Reactive Forms','Validations'],
        demo: false
    },
    {
        name: 'Reactive Forms - Operations',
        url: '/',
        title: 'Reactive Forms - Operations',
        image: '../assets/img/filter.jpg',
        description: 'How we can create Reactive Forms - Operations in Angular with validations.',
        tags: ['Angular 20','Forms','Reactive Forms','Validations'],
        demo: false
    },
]
export const DEFAULT_SNIPPET: CardDetailsModel = {
    name: '', 
    url: '',
    title: '',
    description: ''
};