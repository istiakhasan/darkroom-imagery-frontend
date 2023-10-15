import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFaq: build.mutation({
      query: (data) => ({
        url: "/faq",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    getAllFaq: build.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
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
  useAddFaqMutation,
  useGetAllFaqQuery,
  useUpdateFaqByIdMutation,
  useDeleteaqByIdMutation,
  useAllFaqForUsersQuery,
} = faqApi;
