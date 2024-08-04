export interface AuthReturn {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    refreshToken: string;
}

export interface Auth {
    username: string;
    password: string;
}
