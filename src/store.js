import { createStore } from "redux";
import * as types from './Color/types';

//initial state
const initialState = {
  color: "#ff0000"
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload.value
      };
    default:
      return state;
  }
};

//createStore
const store = createStore(reducer);

//export store

export default store;
