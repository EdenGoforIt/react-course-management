import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

describe("createCourseActionSuccess", () => {
  it("it should create a CREATE_COURSE_SUCCESS action", () => {
    //get first course
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course,
    };

    const action = courseActions.saveCourseSuccess(course);

    expect(action).toEqual(expectedAction);
  });
});
