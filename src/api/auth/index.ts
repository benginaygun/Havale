import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { IRegisterResponse } from "../../Interfaces/IRegisterResponse";
import { IRegisterRequest } from "../../Interfaces/IRegisterRequest";
import { axiosInstance } from "../instance";
import { ILoginRequest } from "../../Interfaces/ILoginRequest";
import { ILoginResponse } from "../../Interfaces/ILoginResponse";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);

export const logout = ():AxiosPromise => {
  return axiosInstance.post(Endpoints.AUTH.LOGOUT);
}

export const register = (params:IRegisterRequest):AxiosPromise<IRegisterResponse> => 
  axiosInstance.post(Endpoints.AUTH.REGISTER,params);