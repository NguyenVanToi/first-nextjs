import { combineReducers } from "redux";
import loginReducer from "./login/loginSlice";

const screenReducer = combineReducers({
  login: loginReducer,
});
export default screenReducer;
