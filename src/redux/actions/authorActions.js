import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (despatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        despatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error(error);
      });
  };
}
