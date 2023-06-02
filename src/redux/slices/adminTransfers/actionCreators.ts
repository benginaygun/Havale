import { Dispatch } from "@reduxjs/toolkit";
import api from "../../../api";
import { getAdminTransfers } from "./adminTransfersSlice";

export const getAllTransfers =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.adminTransfers.getAdminTransfers();
      dispatch(getAdminTransfers(res.data));
    } catch (e) {
      console.error(e);
    }
  };