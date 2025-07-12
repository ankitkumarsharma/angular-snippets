export const ACCORDION_CONSTANTS = {
    pills: [
        {
            title: 'Same Content',
            category: 'same-content',
        },
        {
            title: 'Custom Content',
            category: 'custom-content',
        }
    ],
    sameContent: [
        {
            title: 'Accordion Item #1',
            content: 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.',
            isActive: true
        },
        {
            title: 'Accordion Item #2',
            content: 'This is the second item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
            isActive: false
        },
        {
            title: 'Accordion Item #3',
            content: 'This is the third item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
            isActive: false
        }
    ],
    customContent: [
        {
            title: 'Plain Text #1',
            content: {
                type: 'text',   
                value: 'This is a custom content item that can be toggled independently.'
            },
            isActive: true
        },
        {
            title: 'HTML Text #2',
            content: {
                type: 'html',
                value: '<p>This is another custom <strong> content item</strong> that can be toggled independently.</p>'
            },
            isActive: false
        },
        {
            title: 'Image Content',
            content: {
                type: 'image',
                value: '/assets/img/filter.jpg'
            },
            isActive: false
        },
        {
            title: 'Video Content',
            content: {
                type: 'video',
                value: 'https://www.w3schools.com/html/mov_bbb.mp4'
            },
            isActive: false
        },
        {
            title: 'Form Type Content',
            content: {
                type: 'form',
                value: [
                    {
                        label: 'Name',
                        name: 'name',
                        type: 'text',
                        value: 'Ankit',
                        placeholder: 'Enter your name'
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        type: 'email',
                        value: '',
                        placeholder: 'Enter your email'
                    },
                    {
                        label: 'Submit',
                        type: 'button',
                        action: () => onsubmit
                    }
                ]
            },
            isActive: false
        }
    ]
}