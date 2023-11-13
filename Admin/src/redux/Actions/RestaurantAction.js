import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';

export const getUnApprovedRestaurants = () => {
    return async (dispatch) => {
        console.log('HERE')
        dispatch(selectProgressBarState(true));
        const res = await axiosInstance.get('/api/v1/restaurant/get-unverified-restaurants');

        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_UNAPPROVED_RESTAURANTS,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Restaurant Found');
            dispatch({
                type: ACTION_TYPES.GET_UNAPPROVED_RESTAURANTS,
                payload: []
            })
        }
    }
}

export const updateRestaurantStatusToApproved = (alert, navigate, id) => {
    return async (dispatch) => {

        const res = await axiosInstance.patch('/api/v1/restaurant/update-restaurant-status-to-approve', { verified: true }, {
            params: {
                id: id
            }
        })
        if (res.data.success === true) {
            alert.show('Restaurant status updated successfully')
            dispatch({
                type: ACTION_TYPES.UPDATE_TO_APPROVED_RESTAURANTS,
                payload: res.data.data
            })
        }
        else {
            alert.show('Update failed')
            dispatch({
                type: ACTION_TYPES.UPDATE_TO_APPROVED_RESTAURANTS,
                payload: []
            })
        }
    }
}