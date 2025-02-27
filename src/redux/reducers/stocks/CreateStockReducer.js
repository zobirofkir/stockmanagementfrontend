import CreateStockType from "@/redux/types/stocks/CreateStockType";

const initialState = {
    isLoading: false,
    stockSuccess: null,
    stockError: null,
};

const CreateStockService = (state = initialState, action) => {
    switch (action.type) {
        case CreateStockType.CREATE_STOCK_REQUEST:
            return { ...state, isLoading: true, stockSuccess: null, stockError: null };
        case CreateStockType.CREATE_STOCK_SUCCESS:
            return { ...state, isLoading: false, stockSuccess: action.payload, stockError: null };
        case CreateStockType.CREATE_STOCK_FAILURE:
            return { ...state, isLoading: false, stockSuccess: null, stockError: action.payload };
        default:
            return state;
    }
}

export default CreateStockService