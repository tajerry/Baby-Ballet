import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5002/api` }),
    tagTypes: ["USERS"],
    endpoints: (builder) => {
        return {
            createUser: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/users',
                        method: 'POST',
                        body: payload,
                    }
                },
                invalidatesTags:["USERS"]
            }),
        };
    },
});
export const { useCreateUserMutation} = usersApi;
