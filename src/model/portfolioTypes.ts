export interface TestimonialType {
    comment: string,
    idC: number,
    subTitle: string,
    title: string
}

export interface AboutMeType {
    idH: number,
    name: string
}

export interface ResumeType {
    idD: number,
    name: string,
    detail: ResumeDetailType[]
}

export interface ResumeDetailType {
    idDD: number,
    name: string,
    named: string,
    time: string
}

export interface PortfolioType {
    category: string
    id: number
    name?: string
    knows?: string
    subtitle?: string
    content?: string
    optSgt?: string
    title?: string
    technology?: string[]
    highlights?: AboutMeType[]
    details?: ResumeType[]
    comments?: TestimonialType[]
    en?: string,
    form?: formsType
}

export interface formsType {
    name: string
    email: string
    message: string
    nameBtn: string
}

export interface LinkType {
    link: string
    url: string
}

export interface SendEmailType {
    nameField: string;
    mailField: string;
    message: string;
}
