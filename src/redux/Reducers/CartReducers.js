import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    userCart: {},
    cart: {},
    cartLength: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART: {
            return {
                ...state,
                cart : action.payload,
            };
        }
        case ACTION_TYPES.GET_USER_CART: {
            return {
                ...state,
                userCart : action.payload,
            };
        }
        case ACTION_TYPES.GET_CART_LENGTH: {
            return {
                ...state,
                cartLength : action.payloadLength,
            };
        }
        default: {
            return state;
        }
    }
};
export default cartReducer;