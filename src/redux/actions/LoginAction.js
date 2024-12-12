import { LoginService } from "../services/LoginService";
import { LoginType } from "../types/LoginType";

export function LoginSuccess(data) {
  return {
    type: LoginType.LOGIN_SUCCESS,
    payload: data,
  };
}

export function LoginFail(error) {
  return {
    type: LoginType.LOGIN_FAIL,
    payload: error,
  };
}
export const LoginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await LoginService(email, password);
      console.log(response.data.data);
      
      dispatch(LoginSuccess(response.data));
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "An error occurred. Please try again.";
      dispatch(LoginFail(errorMsg));
    }
  };
};
