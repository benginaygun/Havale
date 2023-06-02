import { logger } from 'redux-logger';
import { useDispatch } from 'react-redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from '../slices/auth/authSlice';
import userReducer from '../slices/user/userSlice';
import  adminWithdrawalsReducer  from '../slices/adminWithdrawals/adminWithdrawalsSlice';
import adminInvestsReducer from '../slices/adminInvests/adminInvestsSlice';
import  adminTransfersReducer  from '../slices/adminTransfers/adminTransfersSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    adminWithdrawals:adminWithdrawalsReducer,
    AdminInvests:adminInvestsReducer,
    AdminTransfers:adminTransfersReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : []))
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch : () => AppDispatch = useDispatch;