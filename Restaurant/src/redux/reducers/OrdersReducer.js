import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    order: {},
    orders: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ORDERS: {
            return {
                ...state,
                order : action.payload,
            };
        }
        case ACTION_TYPES.GET_ORDERS: {
            return {
                ...state,
                orders: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_ORDERS: {
            return {
                ...state,
                orders: state.orders.filter(
                    (orders) => !action.payload.includes(orders._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default orderReducer;