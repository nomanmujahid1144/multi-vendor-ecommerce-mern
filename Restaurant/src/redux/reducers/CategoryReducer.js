import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    category: {},
    restaurantCategories: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CATEGORY: {
            return {
                ...state,
                category: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_CATEGORY: {
            return {
                ...state,
                category: action.payload,
            };
        }
        case ACTION_TYPES.GET_RESTAURANT_CATEGORIES: {
            return {
                ...state,
                restaurantCategories: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_CATEGORIES: {
            return {
                ...state,
                restaurantCategories: state.restaurantCategories.filter(
                    (category) => !action.payload.includes(category._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default categoryReducer;