import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/AUTH`,
        method: "POST",
        body: data,
      }),
    }),
    logout: () => ({
      query: `${USERS_URL}/logout`,
      method: "POST",
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;
