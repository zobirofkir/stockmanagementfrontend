import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "../reducers/LoginReducer";
import LogoutReducer from "../reducers/LogoutReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    logout: LogoutReducer
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);


export default store; 