import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_CHARACTER_SUCCESS:
    console.log(action.payload.results)
      return {
        ...state,
        fetching: false,
        characters: action.payload.results
      }
      
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
