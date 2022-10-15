import produce from "immer";
import { SET_COURSE_DETAIL, SET_LIST_COURSES } from "./action";
const initialState = {
  listCourses: [],
  courseDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_COURSES: {
      const nextState = produce(state, (draft) => {
        draft.listCourses = action.payload;
      });
      return nextState;
    }

    case SET_COURSE_DETAIL: {
      const nextState = produce(state, (draft) => {
        draft.courseDetail = action.payload;
      });
      return nextState;
    }
    default:
      return state;
  }
};
export default reducer;
