import CreateStockService from "@/redux/services/stocks/CreateStockService";
import CreateStockType from "@/redux/types/stocks/CreateStockType";


export const createStockSuccess = (data) => {
    return {
        type: CreateStockType.CREATE_STOCK_SUCCESS,
        payload: data,
    };
};


export const createStockFail = (data) => {
    return {
        type: CreateStockType.CREATE_STOCK_FAILURE,
        payload: data,
    };
};

const CreateStockAction = (data) => async (dispatch) => {
    dispatch({ type: CreateStockType.CREATE_STOCK_REQUEST });
    try {
        const response = await CreateStockService(data);
        if (response?.data?.data) {
            dispatch(createStockSuccess(response.data.data));
        } else {
            throw new Error("Invalid response from server.");
        }
    } catch (error) {
        const errorMsg = error?.response?.data?.message || "An error occurred. Please try again.";
        dispatch(createStockFail(errorMsg));
    }
};

export default CreateStockAction;