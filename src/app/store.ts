import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commonReducer from "./commonSlice";
import logger from "redux-logger";
import screenReducer from "../screens/screensReducer";
// import { persistStore } from "redux-persist";
// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   storage: localStorage,
//   whitelist: ["common"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistReducers = combineReducers({
//   counter: counterReducer,
//   common: commonReducer,
//   screens: screenReducer,
// });

// const reducers = persistReducer(persistConfig, persistReducers);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    common: commonReducer,
    screens: screenReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
