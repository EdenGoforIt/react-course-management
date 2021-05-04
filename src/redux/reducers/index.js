import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});
export default rootReducer;
