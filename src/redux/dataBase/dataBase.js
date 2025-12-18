import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from "axios";

// const axiosBaseQuery =
//   ({baseUrl} = {baseUrl: ''}) => 
//     async ({url, method, data, params}) => {
//       try {
//         const result = await axios({url: baseUrl + url, method, data, params});

//         return {data: result.data};
//       } catch (axiosError) {
//         let error = axiosError;

//         return {
//           error: {
//             status: error.response?.status,
//             data: error.response?.data || error.message,
//           },
//         };
//       }
//     };

export const dataBaseApi = createApi({
  reducerPath: 'dataBase',
  // baseQuery: axiosBaseQuery({
  //   baseUrl: 'http://localhost:4000'
  // }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token
      if(token){
        headers.set('authorization', `Bearer ${token}`)
      } else {
        headers.delete('authorization');
      }
      return headers
    }
  }),
  tagTypes: ['dataBase'],
  endpoints: builder => ({
    addContact: builder.mutation({
      query: (value) => ({
        url: '/api/dataBase/addContacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['dataBase'],
    }),
    // getAllContacts: builder.query({
    //   query: ({page, byAlphabet, byAge, createdAt, byGender, keySearch}) => ({
    //     url: `api/dataBase/getContacts?page=${page}&byAlphabet=${byAlphabet}&byAge=${byAge}&createdAt=${createdAt}&byGender=${byGender}&keySearch=${keySearch}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['dataBase'],
    // }),
    getAllContacts: builder.query({
  query: ({ page, byAlphabet, byAge, createdAt, byGender, keySearch, notes }) => {
    const params = new URLSearchParams({
      page,
      byAlphabet,
      byAge,
      createdAt,
      byGender,
      keySearch,
      notes,
    });

    return {
      url: `api/dataBase/getContacts?${params.toString()}`,
      method: 'GET',
    };
  },
  providesTags: ['dataBase'],
}),
    deleteContact: builder.mutation({ 
      query: (id) => ({
        url: `/api/dataBase/deleteContact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['dataBase'],
    }),
    getStatistics: builder.query({
      query: () => ({
        url: 'api/dataBase/getStatistics',
        method: 'GET'
      }),
      providesTags: ['dataBase'],
    }),
    updateNote: builder.mutation({
      query: (value) => ({
        url: `api/dataBase/changeNote/${value.id}`,
        method: 'PATCH',
        body: {
          note: value.note
        },
      }),
      invalidatesTags: ['dataBase']
    }),
    updateContact: builder.mutation({
      query: (value) => ({
        url: `/api/dataBase/changeContact/${value.id}`,
        method: 'PATCH',
        body: {
          firstName: value.firstName,
          lastName: value.lastName,
          middleName: value.middleName,
          gender: value.gender,
          phone: value.phone,
          streetName: value.streetName,
          streetNumber: value.streetNumber,
          dateOfBirth: value.dateOfBirth,
          email: value.email,
        },
      }),
      invalidatesTags: ['dataBase'],
    })
  })
});
 
export const {
useAddContactMutation, 
useDeleteContactMutation, 
useGetAllContactsQuery, 
useUpdateContactMutation,
useGetStatisticsQuery,
useGetcontactByIdQuery,
useUpdateNoteMutation
} = dataBaseApi;