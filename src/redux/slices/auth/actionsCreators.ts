import { useNavigate } from 'react-router-dom';
import Cookie from "js-cookie";
import { Dispatch } from "@reduxjs/toolkit";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./authSlice";
import api from "../../../api";
import { ILoginRequest } from '../../../Interfaces/ILoginRequest';
import { IRegisterRequest } from '../../../Interfaces/IRegisterRequest';
export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      dispatch(loginSuccess(res.data.token));

      const SetCookie = (cookiename: string, userin: string) => {
        Cookie.set(cookiename, userin, {
          expires: 1/4,
          secure: true,
          sameSite: "Strict",
          path: "/",
        });
      };
      SetCookie('token',res.data.token);
      
    } catch (e: any) {
      console.error(e);
      dispatch(loginFailure(e.message));
    }
  };

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();
      dispatch(logoutSuccess());
      Cookie.remove("token");
    } catch (e) {
      console.error(e);
    }
  };


  export const registerUser = (data:IRegisterRequest) => async (dispatch : Dispatch): Promise<void> => {
    try {
      await api.auth.register(data);
    } catch (e) {
      console.error(e);
    }
  }