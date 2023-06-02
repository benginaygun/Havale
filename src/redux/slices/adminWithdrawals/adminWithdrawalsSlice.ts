import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminWithdrawal {
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

interface AdminWithdrawalsState{
    adminWithdrawals:AdminWithdrawal[]
}

const initialState: AdminWithdrawalsState = {
  adminWithdrawals: []
};

export const adminWithdrawalsSlice = createSlice({
  name: "adminWithdrawals",
  initialState,
  reducers: {
    getAdminWithdrawals: (state, action): AdminWithdrawalsState => {
        state.adminWithdrawals = action.payload
        return state;
    },
    acceptWithdrawal: (state,action):AdminWithdrawalsState => {
      let withdrawal = state.adminWithdrawals.find(w => w.id === action.payload)!;
      withdrawal.state = "Tamamlandı"
      return state;
    },
    rejectWithdrawal: (state,action):AdminWithdrawalsState => {
      let withdrawal = state.adminWithdrawals.find(w => w.id === action.payload)!;
      withdrawal.state = "Reddedildi"
      return state;
    }
  },
});

export const { getAdminWithdrawals } = adminWithdrawalsSlice.actions;

export default adminWithdrawalsSlice.reducer;
