import { ProfileType } from "../types/ProfileType";
import { ProfileService } from "../services/ProfileService";

export const GetProfileSuccess = (data) => ({
    type: ProfileType.GET_PROFILE_SUCCESS,
    payload: data,
});

export const GetProfileFail = (error) => ({
    type: ProfileType.GET_PROFILE_FAIL,
    payload: error,
});

export const UpdateProfileSuccess = (data) => ({
    type: ProfileType.UPDATE_PROFILE_SUCCESS,
    payload: data,
});

export const UpdateProfileFail = (error) => ({
    type: ProfileType.UPDATE_PROFILE_FAIL,
    payload: error,
});

export const ProfileAction = () => {
    return async (dispatch) => {
        try {
            const response = await ProfileService();
            dispatch(GetProfileSuccess(response.data.data));
        } catch (error) {
            const errorMsg =
                error.response?.data?.message || "An error occurred. Please try again.";
            dispatch(GetProfileFail(errorMsg));
        }
    };
};
