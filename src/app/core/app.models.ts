export interface LabelsModel {
    home: string,
    fullName: string,
    route: RouteModel
}

export interface RouteModel {
    home: string
}

export interface CardDetailsModel {
    title: string,
    image?: string,
    categories?: Array<string>,
    url?: string,
    description?: string;
    name?: string;
}