import { createStore, combineReducers } from "redux";
import elearningReducer from "features/elearning/elearningSlice";

const rootReducer = combineReducers({
  elearning: elearningReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
