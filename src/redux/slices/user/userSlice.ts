import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userData: {
    username: string | null;
    email: string | null;
    fullname: string | null;
    balance:number;
  };
}

const initialState: UserState = {
  userData: {
    username: null,
    email: null,
    fullname: null,
    balance:0
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDatas: (state,action): UserState => ({
      ...state,
      userData: {
        ...state.userData,
        username: action.payload.username,
        email:action.payload.email,
        fullname:action.payload.fullname,
        balance:action.payload.balance
      },
    })
  },
});

export const { getUserDatas } =
  userSlice.actions;

export default userSlice.reducer;