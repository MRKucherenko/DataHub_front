import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authReducer';
import { dataBaseApi } from './dataBase/dataBase';
import { filterSlice } from './filters/filterReducer';
import { workWithUsersApi } from './workWithUsers/workWithUsers';
import { themeReducer } from './theme/themeSlice';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
    dataBaseApi.middleware,
    workWithUsersApi.middleware
];

const authPersistConfig ={
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
    [dataBaseApi.reducerPath]: dataBaseApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [workWithUsersApi.reducerPath]: workWithUsersApi.reducer,
    theme: themeReducer,
  },
  middleware,
})

export const persistor = persistStore(store);