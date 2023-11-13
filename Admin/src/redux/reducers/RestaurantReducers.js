import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    restaurant: {},
    restaurants: [],
    unApprovedRestaurants: []
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_UNAPPROVED_RESTAURANTS: {
            return {
                ...state,
                unApprovedRestaurants: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_TO_APPROVED_RESTAURANTS: {
            return {
                ...state,
                restaurant: action.payload,
            };
        }
        // case ACTION_TYPES.DELETE_CATEGORIES: {
        //     return {
        //         ...state,
        //         categories: state.categories.filter(
        //             (category) => !action.payload.includes(category._id)
        //         ),
        //     };
        // }
        default: {
            return state;
        }
    }
};
export default restaurantReducer;