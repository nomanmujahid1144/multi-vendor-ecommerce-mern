import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    about: {},
    aboutUs: []
};

const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ABOUT_US: {
            return {
                ...state,
                about: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_ABOUT_US: {
            return {
                ...state,
                about: action.payload,
            };
        }
        case ACTION_TYPES.GET_ALL_ABOUT_US: {
            return {
                ...state,
                aboutUs: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_ABOUT_US: {
            return {
                ...state,
                aboutUs: state.about.filter(
                    (category) => !action.payload.includes(category._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default aboutUsReducer;