import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const addaboutUs = (aboutus, navigate , alert) => {

    return async (dispatch) => {
        const res = await axiosInstance.post('/api/v1/about/addAboutUs', {aboutus})
        if (res.data.success === true) {
            alert.show('Added successfully', {
                onClose: () => {
                    // setIsOpen(false)
                    navigate('/aboutus')

                }
            })
            setTimeout(() => {
                // setIsOpen(false)
                navigate('/aboutus')

            }, 5000)
            dispatch({
                type: ACTION_TYPES.SET_ABOUT_US,
                payload: res.data.data
            })
        }
        else {
            alert.show('error while adding About Us')
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

export const getAboutUs = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/about/getAboutus')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_ALL_ABOUT_US,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No About Us Found')
            dispatch({
                type: ACTION_TYPES.GET_ALL_ABOUT_US,
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