import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminInvest {
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

interface AdminInvestsState{
    adminInvests:AdminInvest[]
}

const initialState: AdminInvestsState = {
  adminInvests: []
};

export const adminInvestsSlice = createSlice({
  name: "adminInvests",
  initialState,
  reducers: {
    getAdminInvests: (state, action): AdminInvestsState => {
        state.adminInvests = action.payload
        return state;
    },
    acceptInvests: (state,action):AdminInvestsState => {
      let invest = state.adminInvests.find(w => w.id === action.payload)!;
      invest.state = "Tamamlandı"
      return state;
    },
    rejectInvests: (state,action):AdminInvestsState => {
      let invest = state.adminInvests.find(w => w.id === action.payload)!;
      invest.state = "Reddedildi"
      return state;
    }
  },
});

export const { getAdminInvests } = adminInvestsSlice.actions;

export default adminInvestsSlice.reducer;
