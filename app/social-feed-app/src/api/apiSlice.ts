import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IChatUser } from '../types/types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<IChatUser[], void>({
            query: () => 'chatUsers.json',
        }),
    }),
});

export const { useGetUsersQuery } = apiSlice;