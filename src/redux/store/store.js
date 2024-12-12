import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "../reducers/LoginReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);


export default store; 