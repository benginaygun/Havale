import { AxiosPromise } from "axios";
import { IGetUserDataResponse } from "../../Interfaces/IGetUserDataResponse";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getUserData = ():AxiosPromise<IGetUserDataResponse> => 
  axiosInstance.get(Endpoints.USER.GETUSERDATA);