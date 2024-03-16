import { BOTTOM_TAB } from "../../constants";

const initialState = {
  tab: "Home"
}

export const bottomNavChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOTTOM_TAB.TAB_CHANGE:
      return { tab: action.payload }
    default:
      return state
  }
}