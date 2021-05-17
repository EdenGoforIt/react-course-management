import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

it("it should handle create courses", () => {
  const store = createStore(rootReducer, initialState);
  const course = { title: "new Titl" };
  //action
  const action = courseActions.saveCourseSuccess(course);
  store.dispatch(action);

  //assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
