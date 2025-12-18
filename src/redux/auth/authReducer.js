import { createSlice } from "@reduxjs/toolkit";
import {registerAfter,
loginAfter,
logout,
curentUser,
registerBefore,
loginBefore} from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    role: null,
  },
  token: null,
  isRefreshUser: false,
  isLogin: false,
  isOTP: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
  .addCase(registerAfter.pending, state => state)
  .addCase(registerAfter.rejected, state => state)
  .addCase(registerAfter.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.user.role = action.payload.role,
    state.token = action.payload.token,
    state.isLogin = true,
    state.isRefreshUser = false,
    state.isOTP = false
  })
  .addCase(registerBefore.pending, () => initialState)
  .addCase(registerBefore.rejected, () => initialState)
  .addCase(registerBefore.fulfilled, (state, action) => {
    state.user.name = null,
    state.user.email = action.payload.email,
    state.user.role = null,
    state.token = null,
    state.isRefreshUser = false,
    state.isLogin = false,
    state.isOTP = action.payload.googleSecret.otpAuthUrl
  }) 
  .addCase(loginAfter.pending, state => state)
  .addCase(loginAfter.rejected, state => state)
  .addCase(loginAfter.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.user.role = action.payload.role,
    state.token = action.payload.token,
    state.isLogin = true,
    state.isRefreshUser = false,
    state.isOTP = false
  })
  .addCase(loginBefore.pending, () => initialState)
  .addCase(loginBefore.rejected, () => initialState)
  .addCase(loginBefore.fulfilled, (state, action) => {
    state.user.name = null,
    state.user.email = action.payload.email,
    state.user.role = null,
    state.token = null,
    state.isRefreshUser = false,
    state.isLogin = false,
    state.isOTP = true
  })
  .addCase(logout.pending, state => state)
  .addCase(logout.rejected, () => initialState)
  .addCase(logout.fulfilled, () => initialState)
  
  .addCase(curentUser.pending, state => {state.isRefreshUser = true})
  .addCase(curentUser.rejected, () => initialState)
  .addCase(curentUser.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.user.role = action.payload.role,
    state.isLogin = true,
    state.isRefreshUser = false,
    state.isOTP = false
  })
})

