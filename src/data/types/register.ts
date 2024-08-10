export interface RegisterReturn extends Register {
    id: number;
}

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
