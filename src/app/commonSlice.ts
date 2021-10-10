import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../models/user";

export interface CommonState {
  isLoading: boolean;
  userInfo: IUserInfo;
}

const initialState: CommonState = {
  isLoading: false,
  userInfo: { email: "", password: "" },
};

export const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserInfoAction: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLoadingAction, setUserInfoAction } = CommonSlice.actions;

export default CommonSlice.reducer;
