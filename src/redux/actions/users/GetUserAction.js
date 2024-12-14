import GetUsersService from "@/redux/services/users/GetUsersService";
import GetUsersType from "@/redux/types/users/GetUsersType";

// Success action for fetching users
export const successGetUsers = (data) => ({
    type: GetUsersType.GET_USERS_SUCCESS, 
    payload: data,
});

export const failGetUsers = (error) => ({
    type: GetUsersType.GET_USERS_FAIL,    
    payload: error,
});

export const loadingGetUsers = () => ({
    type: GetUsersType.LOADING_USERS,
    payload: null,
});

// Thunk action to handle API request and dispatch actions
export const GetUsersAction = (params) => {
    return async (dispatch) => {
        dispatch(loadingGetUsers());

        try {
            const response = await GetUsersService(params);
            // Dispatch success action with the fetched data
            dispatch(successGetUsers(response.data.data));
            console.log(response.data.data);
            return { success: true, data: response.data.data };
        } catch (error) {
            // Get error message and dispatch failure action
            const errorMsg = error?.response?.data?.message || "An error occurred. Please try again.";
            dispatch(failGetUsers(errorMsg));
            return { success: false, error: errorMsg };
        }
    };
};
