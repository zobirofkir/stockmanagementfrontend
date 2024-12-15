import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import LoginReducer from "../reducers/LoginReducer";
import LogoutReducer from "../reducers/LogoutReducer";
import ProfileReducer from "../reducers/ProfileReducer";
import CreateUserReducer from "../reducers/users/CreateUserReducer";
import GetUsersReducer from "../reducers/users/GetUsersReducer";
import UserInfoReducer from "../reducers/users/UserInfoReducer";
import UpdateUserReducer from "../reducers/users/UpdateUserReducer";
import DeleteUserReducer from "../reducers/users/DeleteUserReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    logout: LogoutReducer,
    profile: ProfileReducer,
    /**
     * Users
     */
    createUser : CreateUserReducer,
    getUsers : GetUsersReducer,
    userInfo : UserInfoReducer,
    updateUser : UpdateUserReducer,
    deleteUser : DeleteUserReducer
    
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);


export default store; 