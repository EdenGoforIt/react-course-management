import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function saveCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch({ type: types.BEGIN_API_CALL });
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch({ type: types.LOAD_COURSES_SUCCESS, courses });
        //or  dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error(error);
      });
  };
}
export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall);

    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(saveCourseSuccess(savedCourse));

        //or  dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error(error);
      });
  };
}
