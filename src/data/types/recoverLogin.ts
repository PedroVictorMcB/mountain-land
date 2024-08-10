export interface RecoverLoginReturn {
    limit: number;
    skip: number;
    total: number;
    users: object[];
}

export interface RecoverLogin {
    email: string;
}
