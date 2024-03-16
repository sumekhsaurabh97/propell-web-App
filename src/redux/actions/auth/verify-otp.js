import { VERIFY_OTP_CONSTANTS } from "../../constants";
import { axiosLoginInstance } from "../../../config/axios";

export const verifyOtp = (data, navigate) => async (dispatch) => {
  dispatch({ type: VERIFY_OTP_CONSTANTS.VERIFY_OTP_INIT })
  try {
    const res = await axiosLoginInstance.post("/login/", data)
    dispatch({ type: VERIFY_OTP_CONSTANTS.VERIFY_OTP_SUCCESS, payload: res.data })
    sessionStorage.setItem("authToken", res.data?.result?.token);
    navigate("/onboarding")
    console.log(res.data?.result?.token)
  } catch (error) {
    dispatch({ type: VERIFY_OTP_CONSTANTS.VERIFY_OTP_ERROR, payload: error })
  }
}