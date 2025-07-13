import { CardDetailsModel } from "../../../core/app.models";

export const TAGS_LIST = [
    {
        name: 'Filter List',
        url: '/filter-list',
        title: 'Filter List Component',
        image: '../assets/img/filter.jpg',
        description: 'A filter list component that allows you to filter items based on a clcik event term.',
        tags: ['Angular 20','Filter','Reusable']
    },
    {
        name: 'Accordian',
        url: '/accordian',
        title: 'Accordian Component',
        image: '../assets/img/filter.jpg',
        description: 'An accordian component that allows you to expand and collapse sections of content.',
        tags: ['Angular 20','Accordian','Dynamic','Reusable']
    },
    {
        name: 'Tabs',
        url: '/tabs',
        title: 'Tabs Component',
        image: '../assets/img/filter.jpg',
        description: 'A tabs component that allows you to switch between different sections of content.',
        tags: ['Angular 20','Tabs','Dynamic','Reusable']
    },
]
export const DEFAULT_TAG: CardDetailsModel = {
    name: '', 
    url: '',
    title: '',
    description: ''
};