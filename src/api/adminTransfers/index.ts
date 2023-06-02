import { AxiosPromise } from "axios";
import { IGetAdminWithdrawals } from "../../Interfaces/IGetAdminWithdrawals";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getAdminTransfers = (): AxiosPromise<IGetAdminWithdrawals> =>
  axiosInstance.get(Endpoints.ADMIN.TRANSFERS);