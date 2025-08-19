export interface Snippet {
    title: string;
    desc: string;
    coverImage: string | ArrayBuffer | null;
    tagList: string[];
    username: string;
    editorContent?: string;
    isDemo?: boolean;
    demoLink?: string;
    createdAt?: Date;
    updatedAt?: Date;
}