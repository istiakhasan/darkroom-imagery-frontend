import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addServices: build.mutation({
      query: (data) => ({
        url: "/service",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.services],
    }),
    getAllServices: build.query({
      query: (arg) => ({
        url: "/service",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.services],
    }),
    getAllServicesForUsers: build.query({
      query: (arg) => ({
        url: "/service/users",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.services],
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
  useAddServicesMutation,
  useGetAllServicesQuery,
  useGetAllServicesForUsersQuery
  //   useAddBlogMutation,
  //   useGetAllBlogByAuthorEmailQuery,
  //   useDeleteaqBlogByIdMutation,
  //   useUpdateBlogByIdMutation,
  //   useAllBlogForUsersQuery
} = serviceApi;
