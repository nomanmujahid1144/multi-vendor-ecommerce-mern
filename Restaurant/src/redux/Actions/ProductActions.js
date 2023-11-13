import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const addProduct = (values, formData, navigate, alert, setIsOpen) => {

    return async (dispatch) => {
        console.log(values, 'ELSE VALUES')
        const res = await axiosInstance.post('/api/v1/product/addproduct', formData, {
            params: {
                values: values,
                count : formData.get('count')
            }
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        if (res.data.success === true) {

            alert.show('product added successfully', {
                onClose: () => {
                    setIsOpen(false)
                    // navigate('/main/products')
                    navigate('/products')

                }
            })
            setTimeout(() => {
                setIsOpen(false)
                // navigate('/main/products')
                navigate('/products')

            }, 5000)
            dispatch({
                type: ACTION_TYPES.SET_PRODUCT,
                payload: res.data.data
            })
        }
        else {
            alert.show('error while adding product')
        }
    }
}


export const updateProduct = (values, formData, navigate, alert, setIsOpen) => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.patch('/api/v1/product/updateproduct', formData, {
            params: {
                values,
                count : formData.get('count'),
                id: global.editId
            }
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            alert.show('product updated successfully', {
                onClose: () => {
                    setIsOpen(false)
                    // navigate('/main/products')
                    navigate('/products')

                }
            })
            setTimeout(() => {
                setIsOpen(false)
                // navigate('/main/products')
                navigate('/products')

            }, 5000)
            dispatch({
                type: ACTION_TYPES.UPDATE_PRODUCT,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('error while updating product')
        }
    }
}

export const getRestaurantProducts = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/product/get-restaurant-products')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_RESTAURANT_PRODUCTS,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Products Found')
            dispatch({
                type: ACTION_TYPES.GET_RESTAURANT_PRODUCTS,
                payload: []
            })
        }
    }
}

export const deleteProducts = (id, navigate, alert) => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.delete('/api/v1/product/deleteproducts', {
            params: {
                IDS: id
            }
        })
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.DELETE_PRODUCTS,
                payload: id
            })
            alert.show('deleted successfully', {
                onClose: () => {
                    // navigate('/main/products')
                    navigate('/products')
                }
            })
            setTimeout(() => {
                // navigate('/main/products')
                navigate('/products')
            }, 5000)
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('Error in deletion')
        }
    }
}