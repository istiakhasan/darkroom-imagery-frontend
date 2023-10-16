import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBlog: build.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getAllBlogByAuthorEmail: build.query({
      query: (arg) => ({
        url: "/blog",
        method: "GET",
        params:arg
      }),
      providesTags: [tagTypes.blog],
    }),
    allBlogForUsers: build.query({
      query: () => ({
        url: "/blog/get-all",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    deleteaqBlogById: build.mutation({
      query: (data: any) => ({
        url: `/blog/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    updateBlogById: build.mutation({
        query: (data: any) => ({
          url: `/blog/${data?.id}`,
          method: "PATCH",
          data: data?.data,
          contentType: "multipart/form-data",
        }),
        invalidatesTags: [tagTypes.blog],
      }),
  }),
});

export const {
  useAddBlogMutation,
  useGetAllBlogByAuthorEmailQuery,
  useDeleteaqBlogByIdMutation,
  useUpdateBlogByIdMutation,
  useAllBlogForUsersQuery
} = blogApi;
