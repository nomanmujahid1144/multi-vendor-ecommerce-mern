import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    homeData: [],
};

const websiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_WEBSITE_DEFAULT_DATA_BY_USER_LOCATION: {
            return {
                ...state,
                homeData: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default websiteReducer;