import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    restaurants: [],
    restaurant: {},
    restaurantById: {},
    formattedAddress: '',
    restaurantsByUserLocation: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_NEW_RESTAURANT: {
            return {
                ...state,
                restaurant: action.payload,
            };
        }
        case ACTION_TYPES.GET_RESTAURANTS_BY_RESTAURANT_ID: {
            return {
                ...state,
                restaurantById: action.payload,
            };
        }
        case ACTION_TYPES.USER_FORMATTED_ADDRESS_FOR_RESTAURANT_LOCATION: {
            return {
                ...state,
                formattedAddress: action.payload,
            };
        }
        case ACTION_TYPES.GET_RESTAURANTS_BY_USER_LOCATION: {
            return {
                ...state,
                restaurantsByUserLocation: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default restaurantReducer;