import { GET_OTP_CONSTANTS } from "../../constants";
import { axiosLoginInstance } from "../../../config/axios";

export const getOtp = (number, data) => async (dispatch) => {
  dispatch({ type: GET_OTP_CONSTANTS.ADD_NUMBER, number: number })
  dispatch({ type: GET_OTP_CONSTANTS.GET_OTP_INIT })
  try {
    const res = await axiosLoginInstance.post("/signup/", data)
    dispatch({ type: GET_OTP_CONSTANTS.GET_OTP_SUCCESS, payload: res.data })
    console.log(res.data.msg)
  } catch (error) {
    dispatch({ type: GET_OTP_CONSTANTS.GET_OTP_ERROR, payload: error })
  }
}

export const editNumber = () => async (dispatch) => {
  dispatch({ type: GET_OTP_CONSTANTS.GET_OTP_SUCCESS, payload: {} })
}
