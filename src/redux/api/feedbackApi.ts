import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (data) => ({
        url: "/feedback",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    getAllFeedback: build.query({
      query: () => ({
        url: "/feedback",
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
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
    // deleteaqById: build.mutation({
    //   query: (data: any) => ({
    //     url: `/faq/${data?.id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.faq],
    // }),
  }),
});

export const {
useCreateFeedbackMutation,
useGetAllFeedbackQuery
//   usePostReviewMutation,
//   useGetAllReviewQuery,
//   useUpdateFaqByIdMutation,
//   useDeleteaqByIdMutation,
//   useAllFaqForUsersQuery,
} = feedbackApi;
