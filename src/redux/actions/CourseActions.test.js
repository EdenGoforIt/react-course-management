import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

//mock store
const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe("Async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load course thunk", () => {
    it("it should create beging call and load success calls", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        {
          type: types.BEGIN_API_CALL,
        },
        {
          type: types.LOAD_COURSES_SUCCESS,
          courses,
        },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

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
