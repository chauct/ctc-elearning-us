import produce from "immer";
import { LOGIN_ACTION } from "./action";

const initialState = {
  profile: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const nextState = produce(state, (draft) => {
        draft.profile = action.payload;
      });
      return nextState;
    }

    default:
      return state;
  }
};
export default reducer;
