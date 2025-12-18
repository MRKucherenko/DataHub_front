import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    keySearch: '',
    byAlphabet: '',
    byAge: '',
    createdAt: '',
    byGender: '',
    notes: false,
  }
export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    filterKeySearch: (state, {payload}) => {
      state.keySearch = payload
    },
    filterByAlphabet: (state, {payload}) => {
      state.byAlphabet = payload
    },
    filterByAge: (state, {payload}) => {
      state.byAge = payload
    },
    filterCreateAt: (state, {payload}) => {
      state.createdAt = payload
    },
    filterByGender: (state, {payload}) => {
      state.byGender = payload
    },
    filterNotes: (state, {payload}) => {
      state.notes = payload
    },
    clearFilters: () => initialState
  }
})

export const {filterByAlphabet,
filterByAge,
filterCreateAt,
filterByGender,
filterKeySearch,
clearFilters,
filterNotes
} = filterSlice.actions;
