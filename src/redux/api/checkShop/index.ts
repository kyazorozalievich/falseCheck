import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    shopPost: build.mutation<
      SHOP.postShopCheckResponse,
      SHOP.postShopCheckRequest
    >({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    shopGet: build.query<SHOP.getShopCheckResponse, SHOP.getShopCheckRequest>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    shopDelete: build.mutation<
      SHOP.deleteShopCheckResponse,
      SHOP.deleteShopCheckRequest
    >({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useShopGetQuery, useShopPostMutation, useShopDeleteMutation } =
  api;
