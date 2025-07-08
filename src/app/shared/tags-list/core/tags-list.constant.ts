import { TagModel } from "./tags-list.model";

export const TAGS_LIST = [
    {
        name: 'Filter List',
        url: '/filter-list',
        title: 'Filter List Component',
        description: 'A filter list component that allows you to filter items based on a clcik event term.',
    },
    {
        name: 'Accordian',
        url: '/accordian',
        title: 'Accordian Component',
        description: 'An accordian component that allows you to expand and collapse sections of content.',
    },
    {
        name: 'Tabs',
        url: '/tabs',
        title: 'Tabs Component',
        description: 'A tabs component that allows you to switch between different sections of content.',
    },
]
export const DEFAULT_TAG: TagModel = {
    name: '', 
    url: '',
    title: '',
    description: ''
};