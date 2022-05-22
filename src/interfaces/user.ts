export interface IUser {
    userId: string;
    name: string;
    phone: string;
    GroupId: string;
    juzz: juzz[];
}

interface juzz {
    prop: string;
}
