import * as types from './types';

//initial state
const initialState = {
    color: ""
}

//reducer 

const colorReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.COLOR-CHANGE:
         return {
             ...state,
             count: state.color
     }} };
        

     export default colorReducer;