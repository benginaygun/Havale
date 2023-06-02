import { acceptAdminInvests } from './../../../api/adminInvests/index';
import { getUserData } from './../../../api/user/index';
import { Dispatch } from "@reduxjs/toolkit";
import api from "../../../api";
import { IAcceptWithdrawal } from '../../../Interfaces/IAcceptWithdrawal';
import { getAdminInvests } from './adminInvestsSlice';

export const getAllInvests =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.adminInvests.getAdminInvests();
      dispatch(getAdminInvests(res.data));
    } catch (e) {
      console.error(e);
    }
  };

  export const acceptInvestById = (id:number) => async (dispatch : Dispatch): Promise<void> => {
    try {
      await api.adminInvests.acceptAdminInvests(id);
    } catch (e) {
      console.error(e);
    }
  }

  export const rejectInvetsById = (id:number) => async (dispatch : Dispatch): Promise<void> => {
    try {
      await api.adminInvests.rejectAdminInvests(id);
    } catch (e) {
      console.error(e);
    }
  }