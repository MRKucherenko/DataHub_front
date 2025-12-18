import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'http://localhost:4000';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const cleanAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerAfter = createAsyncThunk('auth-register', async (creadentials, thunkAPI) => {
  try {
    const {data:{data}} = await axios.post('/api/auth/register', creadentials);
    setAuthHeader(data.token);

    return data;
  } catch (error) {
     toast.error('Incorrect verification code')
     return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerBefore = createAsyncThunk('auth-register-OTP', async(creadentials, thunkAPI) => {
  try {
    const {data:{data}} = await axios.post('api/auth/register', creadentials);

    return data;
  } catch (error) {
    toast.error(error.message)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const loginBefore = createAsyncThunk('auth-login-OTP', async(creadentials, thunkAPI) => {
  try {
   const {data:{data}} = await axios.post('api/auth/login', creadentials);

   return data;
  } catch (error) {
    toast.error('Whrong email or password')
    return thunkAPI.rejectWithValue(error.message);
  }
}) 

export const loginAfter = createAsyncThunk('auth-login', async (creadentials, thunkAPI) => {
  try {
    const {data:{data}} = await axios.post('api/auth/login-OTP', creadentials);
    setAuthHeader(data.token);

    return data;
  } catch (error) {
    toast.error('Incorrect verification code')
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth-logout', async(_, thunkAPI) => {
  try {
     await axios.post('api/auth/logout');
     cleanAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); 
  }
});

export const curentUser = createAsyncThunk('auth-curent', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistetToken = state.auth.token;
    if(!persistetToken) {
      return thunkAPI.rejectWithValue('No User Data');
    }

    setAuthHeader(persistetToken);
    const {data:{data}} = await axios.get('api/auth/curent');

    return data;
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
  }
})

