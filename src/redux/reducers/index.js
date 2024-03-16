import { combineReducers } from "redux";

//Auth
import { getOtpReducer } from "./auth/get-otp";
import { verifyOtpReducer } from "./auth/verify-otp";
import { bottomNavChangeReducer } from "./onboarding/bottom-tab";

export const rootReducer = combineReducers({
  getOtpReducer,
  verifyOtpReducer,
  bottomNavChangeReducer
})