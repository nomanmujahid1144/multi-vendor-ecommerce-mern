import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const restaurantLogin = (email, password, navigate, alert) => {
    return async (dispatch) => {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/restaurant/restaurant-login", {
          email,
          password,
      });
        if (res.data.success) {
          console.log(res.data.data?.token)
          console.log(res.data.data?.data)
            dispatch({
                type: ACTION_TYPES.SET_RESTAURANT_DATA,
                payload: res.data.data.data
            })
            dispatch({
                type: ACTION_TYPES.LOGIN,
                payload: res.data.data?.token
            })
          setTimeout(() => {
            localStorage.setItem("token", res.data.data?.token);
            localStorage.setItem('restaurant', JSON.stringify(res.data.data.data));
            alert.show(res.data.message.toString());
            dispatch(selectProgressBarState(false));
            navigate("/");
          },500)
      } else {
          dispatch(selectProgressBarState(false));
          alert.show(res.data.message.toString());
          dispatch({
              type: ACTION_TYPES.SET_RESTAURANT_DATA,
              payload: {}
          })
          dispatch({
              type: ACTION_TYPES.LOGIN,
              payload: ''
          })
      }
    };
};
export const singleRestaurant = () => {
    return async (dispatch) => {
      const res = await axiosInstance.get("/api/v1/restaurant/get-single-restaurant-data");
      if (res.data.success) {
          console.log(res.data, 'res.data')
      } else {
      }
    };
};