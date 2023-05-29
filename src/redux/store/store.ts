import { logger } from 'redux-logger';
import { useDispatch } from 'react-redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from '../slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch : () => AppDispatch = useDispatch;