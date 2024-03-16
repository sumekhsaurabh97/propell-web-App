import { VERIFY_OTP_CONSTANTS } from "../../constants"

const initialState = {
  loading: false,
  data: {},
  error: {}
}

export const verifyOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_OTP_CONSTANTS.VERIFY_OTP_INIT:
      return { ...state, loading: true }
    case VERIFY_OTP_CONSTANTS.VERIFY_OTP_SUCCESS:
      return { ...state, loading: false, error: {}, data: action.payload }
    case VERIFY_OTP_CONSTANTS.VERIFY_OTP_ERROR:
      return { ...state, loading: false, error: action.payload, data: {} }
    default:
      return state
  }
}