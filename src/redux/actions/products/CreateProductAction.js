import CreateProductService from "@/redux/services/products/CreateProductService";
import { CreateProductType } from "@/redux/types/products/CreateProductType";

const createProductSuccess = (data) => {
    return {
        type: CreateProductType.CREATE_PRODUCT_SUCCESS,
        payload: data,
    };
}

const createProductFail = (error) => {
    return {
        type: CreateProductType.CREATE_PRODUCT_FAIL,
        payload: error,
    };
}

const CreateProductAction = (data) => async (dispatch) => {
    dispatch({ type: CreateProductType.SET_LOADING, isLoading: true });
    try {
        const response = await CreateProductService(data);
        if (response?.data?.data) {
            dispatch(createProductSuccess(response.data.data));
        } else {
            throw new Error("Invalid response from server.");
        }
    } catch (error) {
        const errorMsg = error?.response?.data?.message || "An error occurred. Please try again.";
        dispatch(createProductFail(errorMsg));
    } finally {
        dispatch({ type: CreateProductType.SET_LOADING, isLoading: false }); // Using the constant
    }
}

export default CreateProductAction;
