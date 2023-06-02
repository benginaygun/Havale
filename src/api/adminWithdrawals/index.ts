import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { IGetAdminWithdrawals } from "../../Interfaces/IGetAdminWithdrawals";
import { IAcceptWithdrawal } from "../../Interfaces/IAcceptWithdrawal";

export const getAdminWithdrawals = (): AxiosPromise<IGetAdminWithdrawals> =>
  axiosInstance.get(Endpoints.ADMIN.WITHDRAWALS);

export const acceptAdminWithdrawals = (
  id: number
): AxiosPromise<IAcceptWithdrawal> =>{
  console.log(Endpoints.ADMIN.ACCEPTWITHDRAWALS+id);
  
 return axiosInstance.patch(Endpoints.ADMIN.ACCEPTWITHDRAWALS+id);
}

export const rejectAdminWithdrawals = (
  id: number
): AxiosPromise<IAcceptWithdrawal> =>{
  console.log(Endpoints.ADMIN.REJECTWITHDRAWALS+id);
  
 return axiosInstance.patch(Endpoints.ADMIN.REJECTWITHDRAWALS+id);
}