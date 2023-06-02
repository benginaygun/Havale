import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminTransfer {
  id:number;
  name: string;
  state: string;
  user: {
    fullname:string;
    userName:string;
    id:string;
  };
  sum: number;
  date: string ;
  reciver: string ;
  isInvest: boolean;
  bankAccount: {
    name:string ;
    iban:string ;
  };
}

interface AdminTransfersState{
    adminTransfers:AdminTransfer[]
}

const initialState: AdminTransfersState = {
    adminTransfers: []
};

export const adminTransfersSlice = createSlice({
  name: "adminTransfers",
  initialState,
  reducers: {
    getAdminTransfers: (state, action): AdminTransfersState => {
        state.adminTransfers = action.payload
        return state;
    }
  },
});

export const { getAdminTransfers } = adminTransfersSlice.actions;

export default adminTransfersSlice.reducer;
