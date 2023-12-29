import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

export const getDiscountedProducts = (alert) => {
    return async (dispatch) => {
        await axiosInstance.get('/api/v1/product/getdiscountproducts')
            .then((res) => {
                if (res.data.success === true) {
                    dispatch({
                        type: ACTION_TYPES.GET_DISCOUNTED_PRODUCTS,
                        payload: res.data.data
                    })
                }
                else {
                    alert.show('error while adding product')
                }
            })

    }
}

export const getSingleProductById = (id) => {
    return async (dispatch) => {
        await axiosInstance.get('/api/v1/product/getproductbyId', {
            params: {
                id: id
            }
        })
        .then((res) => {
            if (res.data.success === true) {
                dispatch({
                    type: ACTION_TYPES.GET_SINGLE_PRODUCT_BY_ID,
                    payload: res.data.data
                })
            }
        })

    }
}

