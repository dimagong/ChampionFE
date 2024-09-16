export interface IArticleEntity {
    answer: string;
    question: string;
}

export interface IArticleContent {
    id: string;
    data: IArticleEntity[];
}

export interface IArticle {
    title: string;
    subTitle?: string;
    url?: any;
    id?: string;
    content?: IArticleContent;
}