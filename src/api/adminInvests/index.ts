import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { IGetAdminWithdrawals } from "../../Interfaces/IGetAdminWithdrawals";
import { IAcceptWithdrawal } from "../../Interfaces/IAcceptWithdrawal";
import { IGetAdminInvests } from "../../Interfaces/IGetAdminInvests";
import { IAcceptInvests } from "../../Interfaces/IAcceptInvests";

export const getAdminInvests = (): AxiosPromise<IGetAdminInvests> =>
  axiosInstance.get(Endpoints.ADMIN.INVESTS);

export const acceptAdminInvests = (
  id: number
): AxiosPromise<IAcceptInvests> =>{
  console.log(Endpoints.ADMIN.ACCEPTWITHDRAWALS+id);
  
 return axiosInstance.patch(Endpoints.ADMIN.ACCEPTWITHDRAWALS+id);
}

export const rejectAdminInvests = (
  id: number
): AxiosPromise<IAcceptInvests> =>{
  console.log(Endpoints.ADMIN.REJECTWITHDRAWALS+id);
  
 return axiosInstance.patch(Endpoints.ADMIN.REJECTWITHDRAWALS+id);
}