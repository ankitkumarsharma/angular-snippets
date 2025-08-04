import { CardDetailsModel } from "./app.models"

export const LABELS = {
    home:'Home',
    fullName:'Ankit K Sharma',
    route: {
        home:'/',
        auth:'/auth',
        snippets:'/snippets',
        addsnippet:'/add-snippet',
        login:'/login',
        signup:'/signup',
    },
    snippets:'snippets'
}

export const CardDetailsObject: CardDetailsModel  = {
    title: '',
    image: '',
    categories: []
}

export const FOOTER = {
    createdBy: '© 2025 All rights reserved, Created by <a href="https://www.ankitkumarsharma.com/" target="_blank"> Ankit Kumar Sharma</a>'
}