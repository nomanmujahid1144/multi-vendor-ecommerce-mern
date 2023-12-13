import ProgressBarReducer from './ProgressBarReducer';
import ProfileReducer from './ProfileReducer';
import usersReducer from './UserReducers';
import categoryReducer from './CategoryReducer';
import restaurantReducer from './RestaurantReducer';
import cartReducer from './CartReducers';
import websiteReducer from './WebsiteReducer';

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    ProgressBarReducer,
    ProfileReducer,
    usersReducer,
    categoryReducer,
    restaurantReducer,
    websiteReducer,
    cartReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;