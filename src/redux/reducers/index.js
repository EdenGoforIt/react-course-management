import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});
export default rootReducer;
