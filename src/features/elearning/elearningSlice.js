import produce from "immer";
const initialState = {
  listCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_COURSES":
      state.listCourses = action.payload;
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
