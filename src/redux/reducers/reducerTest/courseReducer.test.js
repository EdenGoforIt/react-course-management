import courseReducer from "../courseReducer";
import * as courseActions from "../../actions/courseActions";

it("it should add course when passed CREATE_COURSE_SUCCESS", () => {
  const newTitle = "THIS IS THE NEW COURSE";
  //initial state
  const initialState = [{ title: "test1" }, { title: "test2" }];
  const newCourse = { title: newTitle };
  //add new course
  const createCourseAction = courseActions.saveCourseSuccess(newCourse);
  const newState = courseReducer(initialState, createCourseAction);

  //assert
  console.log(newState);
  expect(newState.length).toEqual(3);
  expect(newState[2].title).toEqual(newTitle);
});
