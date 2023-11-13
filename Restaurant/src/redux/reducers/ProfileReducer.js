import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    token: '', // Add token if you want to store it separately
    restaurant: {}, // Initialize restaurantData as null
  };
  

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ACTION_TYPES.SET_RESTAURANT_DATA: {
            return {
                ...state,
                restaurant: action.payload,
        }   ;
        }
        case ACTION_TYPES.LOGIN: {
            return {
                ...state,
              token: action.payload,
          };
        }
          // Handle other action types as needed
        default: {
            return state;
        }
}}


export default ProfileReducer