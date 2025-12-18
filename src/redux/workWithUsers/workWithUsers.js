import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workWithUsersApi = createApi({
  reducerPath: 'workWithUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token
        if(token) {
          headers.set('authorization', `Bearer ${token}`)
        } else {
          headers.delete('authorization')
        }
        return headers
    }
  }), 
  tagTypes: ['workWithUsers'],
  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => ({
      url: '/api/workWithUsers/getUsers',
      method: 'GET',
      }),
        providesTags: ['workWithUsers'],
    }),
    changeUser: builder.mutation({
      query: (value) => ({
      url: '/api/workWithUsers/changeRole',
      method: 'PATCH',
      body: value,
    }),
    invalidatesTags: ['workWithUsers']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/workWithUsers/deleteUser/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['workWithUsers']
    }),
  })
})

export const {
  useGetAllUsersQuery,
  useChangeUserMutation,
  useDeleteUserMutation,
} = workWithUsersApi
