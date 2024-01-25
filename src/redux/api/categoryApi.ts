import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategories: build.mutation({
      query: (data) => ({
        url: "/categories/create-category",
        method: "POST",
        data
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
      query: (arg) => ({
        url: "/categories/all",
        method: "GET",
        params:arg
      }),
      providesTags: [tagTypes.categories],
    })
  }),
});

export const {
    useGetAllCategoriesByAuthorEmailQuery,
    useCreateCategoriesMutation,
    useGetAllCategoriesLabelQuery
} = categoryApi;
