import productReducer from './ProductReducer'
import driversReducer from './DriversReducer'
import ProgressBarReducer from './ProgressBarReducer';
import ProfileReducer from './ProfileReducer';
import categoryReducer from './CategoryReducer';
import orderReducer from './OrdersReducer';
import aboutUsReducer from './AboutUsReducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    productReducer,
    driversReducer,
    ProgressBarReducer,
    ProfileReducer,
    categoryReducer,
    orderReducer,
    aboutUsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;