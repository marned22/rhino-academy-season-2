import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IChatUser } from '../types/types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<IChatUser[], void>({
            query: () => 'chatUsers.json',
            providesTags: ['User'],
        }),
        updateUser: builder.mutation<IChatUser, Partial<IChatUser> & { id: string }>({
            queryFn: async (userData) => {
                await new Promise(resolve => setTimeout(resolve, 500)); 
                return { data: userData as IChatUser };
            },
            onQueryStarted: async (userData, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getUsers', undefined, (draft) => {
                        const userIndex = draft.findIndex(user => user.id === userData.id);
                        if (userIndex !== -1) {
                            Object.assign(draft[userIndex], userData);
                        }
                    })
                );
                
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = apiSlice;