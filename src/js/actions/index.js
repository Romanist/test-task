import { 
	ADD_ARTICLE,
	DATA_LOADED,
} from "../constants/action-types";

import { dataUrl } from "../constants/data";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch(dataUrl)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}