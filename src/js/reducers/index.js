import { 
	ADD_ARTICLE,
	DATA_LOADED,	
} from "../constants/action-types";

const initialState = {
  articles: [],
  countries: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return {...state, articles: state.articles.concat(action.payload)}
  }

  if (action.type === DATA_LOADED) {
    return {...state, countries: [...action.payload]}
  }
  return state;
}

export default rootReducer;