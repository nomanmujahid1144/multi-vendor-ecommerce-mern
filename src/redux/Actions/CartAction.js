import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const addToCart = (details, alert) => {
    return async (dispatch) => {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/order/addtocart", details);
        if (res.data.success) {
            dispatch(getCartLength());
            alert.show("Successfully Added");
      } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
      }
    };
};

export const removeFromCart = (details, alert) => {
    return async (dispatch) => {
      dispatch(selectProgressBarState(true));
      const res = await axiosInstance.post("/api/v1/order/decreasecartquantity", details);
        if (res.data.success) {
            dispatch(getCartLength());
            alert.show("Successfully Removed");
      } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
      }
    };
};

export const getCartLength = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        await axiosInstance.get('/api/v1/order/getcartlength')
            .then((res) => {
                if (res.data.success === true) {
                    dispatch(selectProgressBarState(false))
                    dispatch({
                        type: ACTION_TYPES.GET_CART_LENGTH,
                        payloadLength : res.data.data,
                    })
                }
                else {
                    dispatch(selectProgressBarState(false))
                    alert.show('No Cart Found')
                    dispatch({
                        type: ACTION_TYPES.GET_CART_LENGTH,
                        payloadLength : 0,
                    })
                }
            }).catch((err) => {
                dispatch(selectProgressBarState(false))
                dispatch({
                    type: ACTION_TYPES.GET_CART_LENGTH,
                    payloadLength : 0,
                })
            })
    }
}

export const getCart = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        await axiosInstance.get('/api/v1/order/getcart')
            .then((res) => {
                if (res.data.success === true) {
                    dispatch(selectProgressBarState(false))
                    dispatch({
                        type: ACTION_TYPES.GET_USER_CART,
                        payload : res.data.data,
                    })
                }
                else {
                    dispatch(selectProgressBarState(false))
                    alert.show('No Cart Found')
                    dispatch({
                        type: ACTION_TYPES.GET_USER_CART,
                        payload : {},
                    })
                }
            }).catch((err) => {
                dispatch(selectProgressBarState(false))
                dispatch({
                    type: ACTION_TYPES.GET_USER_CART,
                    payload : {},
                })
            })
    }
}
