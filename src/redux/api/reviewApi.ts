import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postReview: build.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getAllReview: build.query({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    allFaqForUsers: build.query({
      query: () => ({
        url: "/faq/get-all",
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFaqById: build.mutation({
      query: (data: any) => ({
        url: `/faq/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteaqById: build.mutation({
      query: (data: any) => ({
        url: `/faq/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetAllReviewQuery,
  useUpdateFaqByIdMutation,
  useDeleteaqByIdMutation,
  useAllFaqForUsersQuery,
} = reviewApi;
