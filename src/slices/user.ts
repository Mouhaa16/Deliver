import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface sign {
    otp: string;
    final: any;
}

const REPO_NAME = 'User';
export const send_Otp = createAsyncThunk('users/otp', (phone: string) => {
    
});

export const Signin = createAsyncThunk('users/login', (sign: sign) => {
    const otp = sign.otp;

    return sign.final.confirm(otp).then((done: any) => done);
});

const UserSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {},
});

export default UserSlice.reducer;
