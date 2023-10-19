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
    getServiceById: build.query({
      query: (arg) => ({
        url: `/service/${arg?.id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services,tagTypes.review],
    }),
    bookedService: build.mutation({
      query: (data) => ({
        url: "/booked-service",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.bookService],
    }),
    getAllBookedServiceByEmail: build.query({
      query: (arg) => ({
        url: "/booked-service",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.bookService],
    }),
    manageBookingServiceById: build.mutation({
      query: (arg) => ({
        url: `/booked-service/${arg?.id}`,
        method: "PATCH",
        data:arg?.data
      }),
      invalidatesTags: [tagTypes.bookService],
    }),
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
  useGetAllServicesForUsersQuery,
  useGetServiceByIdQuery,
  useBookedServiceMutation,
  useGetAllBookedServiceByEmailQuery,
  useManageBookingServiceByIdMutation
  //   useAddBlogMutation,
  //   useGetAllBlogByAuthorEmailQuery,
  //   useDeleteaqBlogByIdMutation,
  //   useUpdateBlogByIdMutation,
  //   useAllBlogForUsersQuery
} = serviceApi;
