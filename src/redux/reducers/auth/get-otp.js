import { GET_OTP_CONSTANTS } from "../../constants";

const initialState = {
  loading: false,
  data: {},
  error: {},
  number: '',
  receivedOtp: false,
};

export const getOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTP_CONSTANTS.ADD_NUMBER:
      return { ...state, number: action.number };
    case GET_OTP_CONSTANTS.GET_OTP_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_OTP_CONSTANTS.GET_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        receivedOtp: action.receivedOtp,
        error: {},
      };
    case GET_OTP_CONSTANTS.GET_OTP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
