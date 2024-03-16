import { BOTTOM_TAB } from "../../constants";

export const changeBottomTab = (activeTab) => async (dispatch) => {
  dispatch({ type: BOTTOM_TAB.TAB_CHANGE, payload: activeTab })
}