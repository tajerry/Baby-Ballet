import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5002/api` }),
  tagTypes: ["COMMENT"],
  endpoints: (builder) => {
    return {
      getCommentALL: builder.query({
          query: () => {
          return `/comment`;
        },
        providesTags: ["COMMENT"],
      }),
    };
  },
});
export const { useGetCommentALLQuery } = commentApi;
