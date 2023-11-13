import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const orderPlace = (order, navigate, alert) => {
    return async (dispatch) => {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/order/placeorder", order);
        if (res.data.success) {
            alert.show("Order Place Successfully");
            navigate('/')
      } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
      }
    };
};

export const deleteCart = () => {
    return async (dispatch) => {
        await axiosInstance.delete("/api/v1/order/deletecart").then((res) => {
          console.log(res, 'res')
        }).catch((err) => {
          console.log(err, 'Error')
      })
    };
};