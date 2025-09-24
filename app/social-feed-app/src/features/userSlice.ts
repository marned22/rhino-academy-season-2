import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    loggedIn: boolean;
}

const initialState: UserState = {
    username: '',
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; }>) => {
            state.username = action.payload.username;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.username = '';
            state.loggedIn = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;