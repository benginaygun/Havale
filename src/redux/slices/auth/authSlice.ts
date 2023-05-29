import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  authData: {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
    isSucceed:boolean;
  };
}

const initialState: AuthState = {
  authData: {
    accessToken: null,
    isLoading: false,
    error: null,
    isSucceed:false
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true,
        isSucceed:false
      },
    }),
    loginSuccess: (state, action: PayloadAction<string>): AuthState => (
      {
      ...state,
      authData: {
        ...state.authData,
        accessToken: action.payload,
        isLoading: false,
        error: null,
        isSucceed:true
      },
    }),
    loginFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload,
        isSucceed:false
      },
    }),
    logoutSuccess: (): AuthState => initialState,
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;