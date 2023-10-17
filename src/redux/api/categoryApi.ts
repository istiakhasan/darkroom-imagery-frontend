import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategories: build.mutation({
      query: (data) => ({
        url: "/categories/create-category",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.categories],
    }),
    getAllCategoriesByAuthorEmail: build.query({
      query: (arg) => ({
        url: "/categories",
        method: "GET",
        params:arg
      }),
      providesTags: [tagTypes.categories],
    }),
    getAllCategoriesLabel: build.query({
      query: () => ({
        url: "/categories/all",
        method: "GET",
      }),
      providesTags: [tagTypes.categories],
    }),
    // allBlogForUsers: build.query({
    //   query: () => ({
    //     url: "/blog/get-all",
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.blog],
    // }),
    // deleteaqBlogById: build.mutation({
    //   query: (data: any) => ({
    //     url: `/blog/${data?.id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.blog],
    // }),
    // updateBlogById: build.mutation({
    //     query: (data: any) => ({
    //       url: `/blog/${data?.id}`,
    //       method: "PATCH",
    //       data: data?.data,
    //       contentType: "multipart/form-data",
    //     }),
    //     invalidatesTags: [tagTypes.blog],
    //   }),
  }),
});

export const {
    useGetAllCategoriesByAuthorEmailQuery,
    useCreateCategoriesMutation,
    useGetAllCategoriesLabelQuery
//   useAddBlogMutation,
//   useGetAllBlogByAuthorEmailQuery,
//   useDeleteaqBlogByIdMutation,
//   useUpdateBlogByIdMutation,
//   useAllBlogForUsersQuery
} = categoryApi;
