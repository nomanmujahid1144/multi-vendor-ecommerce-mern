import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const adminLogin = (selectedState) => {
    return {
      type: ACTION_TYPES.LOGIN ,
      payload: selectedState
    };
};

export const setRestaurantData = (data) => {
    return {
      type: ACTION_TYPES.SET_RESTAURANT_DATA ,
      payload: data
    };
};
