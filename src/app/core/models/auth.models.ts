export class User {
    id: number;
    username: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    token?: string;
    email?: string;
}


export const Role = {
    ADMIN: 'ADMIN',
    TUTOR: 'TUTOR',
    STUDENT: 'STUDENT'
}