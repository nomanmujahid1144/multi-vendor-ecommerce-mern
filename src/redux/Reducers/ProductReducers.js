import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    discountedProducts: [],
    singleProduct: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_DISCOUNTED_PRODUCTS: {
            return {
                ...state,
                discountedProducts: action.payload,
            };
        }
        case ACTION_TYPES.GET_SINGLE_PRODUCT_BY_ID: {
            return {
                ...state,
                singleProduct: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default productReducer;