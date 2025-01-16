import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    busPost: build.mutation<QR.postBusCheckResponse, QR.postBusCheckRequest>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    busGet: build.query<QR.getBusCheckResponse, QR.getBusCheckRequest>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    busDelete: build.mutation<
      QR.deleteBusCheckResponse,
      QR.deleteBusCheckRequest
    >({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useBusGetQuery, useBusPostMutation, useBusDeleteMutation } = api;
