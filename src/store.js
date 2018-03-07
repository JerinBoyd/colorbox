import { createStore } from 'redux';

//types


//actions


//initial state
const initialState = {
    color:''
}
 
//reducer
const reducer = (state=initialState, action) => {
    return state;
}
//createStore
const store = createStore(reducer);


//export store

export default store;