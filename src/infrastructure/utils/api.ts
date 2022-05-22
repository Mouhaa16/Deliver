import axios from 'axios';

export const client = (url: string) =>
    axios.create({
        baseURL: url,
        headers: { Accept: 'application/json' },
    });

export const ERR = (res: any) => axios.isAxiosError(res);
