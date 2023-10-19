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
      invalidatesTags: [tagTypes.services],
    }),
    getAllBookedServiceByEmail: build.query({
      query: (arg) => ({
        url: "/booked-service",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.services],
    }),
    manageBookingServiceById: build.mutation({
      query: (arg) => ({
        url: `/booked-service/${arg?.id}`,
        method: "PATCH",
        data:arg?.data
      }),
      invalidatesTags: [tagTypes.services],
    }),

    updateServiceById: build.mutation({
      query: (data: any) => ({
        url: `/service/${data?.id}`,
        method: "PATCH",
        data: data?.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.services],
    }),
    deleteServiceById: build.mutation({
      query: (data: any) => ({
        url: `/service/${data?.id}`,
        method: "DELETE"
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useAddServicesMutation,
  useGetAllServicesQuery,
  useGetAllServicesForUsersQuery,
  useGetServiceByIdQuery,
  useBookedServiceMutation,
  useGetAllBookedServiceByEmailQuery,
  useManageBookingServiceByIdMutation,
  useUpdateServiceByIdMutation,
  useDeleteServiceByIdMutation
} = serviceApi;
