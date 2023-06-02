import { getUserData } from './../../../api/user/index';
import { Dispatch } from "@reduxjs/toolkit";
import api from "../../../api";
import { getAdminWithdrawals } from './adminWithdrawalsSlice';
import { IAcceptWithdrawal } from '../../../Interfaces/IAcceptWithdrawal';

export const getAllWithDrawals =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.adminWithdrawals.getAdminWithdrawals();
      dispatch(getAdminWithdrawals(res.data));
    } catch (e) {
      console.error(e);
    }
  };

  export const acceptWithdrawalById = (id:number) => async (dispatch : Dispatch): Promise<void> => {
    try {
      await api.adminWithdrawals.acceptAdminWithdrawals(id);
    } catch (e) {
      console.error(e);
    }
  }

  export const rejectWithdrawalById = (id:number) => async (dispatch : Dispatch): Promise<void> => {
    try {
      await api.adminWithdrawals.rejectAdminWithdrawals(id);
    } catch (e) {
      console.error(e);
    }
  }