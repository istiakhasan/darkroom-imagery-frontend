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
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    // allFaqForUsers: build.query({
    //   query: () => ({
    //     url: "/faq/get-all",
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.faq],
    // }),
    // updateFaqById: build.mutation({
    //   query: (data: any) => ({
    //     url: `/faq/${data?.id}`,
    //     method: "PATCH",
    //     data: data?.data,
    //   }),
    //   invalidatesTags: [tagTypes.faq],
    // }),
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
        }),
        invalidatesTags: [tagTypes.blog],
      }),
  }),
});

export const {
  useAddBlogMutation,
  useGetAllBlogByAuthorEmailQuery,
  useDeleteaqBlogByIdMutation,
  useUpdateBlogByIdMutation
//   useGetAllFaqQuery,
//   useUpdateFaqByIdMutation,
//   useDeleteaqByIdMutation,
//   useAllFaqForUsersQuery,
} = blogApi;
