import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
export const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
    tagTypes: ['COMMENT'],
    endpoints: (builder) => {
        return{
            getCommentAll: builder.query({
                query:()  => '/comments',
                invalidatesTags: ['COMMENT']
            })
        }
    }
})
export const {
    useGetCommentAllQuery
} = commentApi;
