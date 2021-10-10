import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoadingAction, setUserInfoAction } from "../../app/commonSlice";
import { LoginForm, LoginSliceState } from "./propState";
function fetchCount(loginForm: LoginForm) {
  return new Promise<{ data: LoginForm }>((resolve) =>
    setTimeout(() => resolve({ data: loginForm }), 2000)
  );
}

const initialState: LoginSliceState = {};

export const signInAction = createAsyncThunk(
  "login/signInAction",
  async (loginForm: LoginForm, { dispatch }) => {
    console.log(loginForm);
    dispatch(setLoadingAction(true));
    const response = await fetchCount(loginForm);
    dispatch(setLoadingAction(false));
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    dispatch(setUserInfoAction(response.data));
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
