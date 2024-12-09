import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const classesApi = createApi({
    reducerPath: "classesApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5002/api` }),
    tagTypes: ["CLASSES"],
    endpoints: (builder) => {
        return {
            getClassesALL: builder.query({
                query: () => {
                    return `/classes`;
                },
                providesTags: ["CLASSES"],
            }),
        };
    },
});
export const { useGetClassesALLQuery } = classesApi;
