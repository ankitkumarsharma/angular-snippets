import { ControlType, Layout, ValidationName } from "@ng-aks/forms";

export const SNIPPETS_CONSTANTS = {
    defaultSnippet: {
        title: 'string',
        desc: 'string',
        coverImage: '',
        tagList: [],
        username: ''
    },
    addSnippetsFormConfig: {
        config: [
            {
                type: ControlType.Text,
                label: 'Title Name',
                name: 'title',
                value: '',
                validations: [
                    {
                        name: ValidationName.Required,
                        message: 'Title is required',
                    },
                ],
            },
            {
                type: ControlType.Textarea,
                label: 'Description',
                name: 'desc',
                value: '',
                validations: [
                    {
                        name: ValidationName.Required,
                        message: 'Description is required',
                    },
                ],
            },
            {
                type: ControlType.Checkbox,
                label: 'IsDemo',
                name: 'isDemo',
                value: '',
                options:[
                    {
                        label: '',
                        value: true
                    }
                ],
            },
            {
                type: ControlType.Text,
                label: 'Demo Link',
                name: 'demoLink',
                value: '',
            }
        ],
        layout: Layout.Horizontal,
    }
}