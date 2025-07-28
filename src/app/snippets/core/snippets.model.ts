export interface Snippet {
    title: string;
    desc: string;
    coverImage: string | ArrayBuffer | null;
    tagList: string[];
    username: string;
    createdAt?: Date;
    updatedAt?: Date;
}