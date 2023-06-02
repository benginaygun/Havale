import { getUserData } from './../../../api/user/index';
import { Dispatch } from "@reduxjs/toolkit";
import api from "../../../api";
import {
    getUserDatas
  } from "./userSlice";

export const getUserInfo =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.user.getUserData();
      dispatch(getUserDatas(res.data));
    } catch (e) {
      console.error(e);
    }
  };