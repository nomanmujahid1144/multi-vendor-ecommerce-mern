import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const addRestaurant = (values , formData, navigate, alert) => {
    return async (dispatch) => {

        const res = await axiosInstance.post('/api/v1/restaurant/addRestaurant', formData, {
            params: {
                values: JSON.stringify(values)
            }
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        if (res.data.success === true) {
            alert.show('Restauant added successfully');
            navigate('/')
            dispatch({
                type: ACTION_TYPES.ADD_NEW_RESTAURANT,
                payload: res.data.data
            })
        }
        else {
            alert.show('error while adding product')
        }
    }
}
export const getRestaurantsByRestaurantId = (id) => {
    return async (dispatch) => {
        await axiosInstance.get('/api/v1/restaurant/get-single-restaurant-data-by-id', {
            params: {
                id: id
            }
        })
        .then((res) => {
            if (res.data.success === true) {
                dispatch({
                    type: ACTION_TYPES.GET_RESTAURANTS_BY_RESTAURANT_ID,
                    payload: res.data.data
                })
            }
        }).catch((err) => {
            console.log(err, 'ERROR')
            // alert.show(err.response.data.message)
        })

    }
}
export const getRestaurantsByUserLocation = (obj, navigate, alert) => {
    return async (dispatch) => {
        await axiosInstance.post('/api/v1/restaurant/get-restaurants-by-user-location', obj)
            .then((res) => {
                if (res.data.success === true) {
                    localStorage.setItem('geomatery', JSON.stringify(obj));
                    navigate('/home', { state: { geomatery: obj } })
                    dispatch({
                        type: ACTION_TYPES.GET_RESTAURANTS_BY_USER_LOCATION,
                        payload: res.data.data
                    })
                }
                else {
                    alert.show('error while adding product')
                }
            }).catch((err) => {
                alert.show(err.response?.data?.message)
            })

    }
}