import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "../reducers/LoginReducer";
import LogoutReducer from "../reducers/LogoutReducer";
import ProfileReducer from "../reducers/ProfileReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    logout: LogoutReducer,
    profile: ProfileReducer,
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);


export default store; 