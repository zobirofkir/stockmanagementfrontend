import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "../reducers/LoginReducer";
import LogoutReducer from "../reducers/LogoutReducer";
import ProfileReducer from "../reducers/ProfileReducer";
import CreateUserReducer from "../reducers/users/CreateUserReducer";
import GetUsersReducer from "../reducers/users/GetUsersReducer";
import UserInfoReducer from "../reducers/users/UserInfoReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    logout: LogoutReducer,
    profile: ProfileReducer,
    /**
     * Users
     */
    createUser : CreateUserReducer,
    getUsers : GetUsersReducer,
    userInfo : UserInfoReducer
    
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);


export default store; 