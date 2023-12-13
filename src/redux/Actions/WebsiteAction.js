import { axiosInstance } from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

export const getWebsiteDefaultDataByUserLocation = (obj, navigate, alert) => {
    return async (dispatch) => {
        await axiosInstance.post('/api/v1/website/get-website-default-data-by-user-location', obj)
            .then((res) => {
                if (res.data.success === true) {
                    localStorage.setItem('geomatery', JSON.stringify(obj));
                    navigate('/home', { state: { geomatery: obj } })
                    // dispatch({
                    //     type: ACTION_TYPES.USER_FORMATTED_ADDRESS_FOR_RESTAURANT_LOCATION,
                    //     payload: obj.formattedAddress
                    // })
                    dispatch({
                        type: ACTION_TYPES.GET_WEBSITE_DEFAULT_DATA_BY_USER_LOCATION,
                        payload: res.data.data
                    })
                }
                else {
                    alert.show('error while adding product')
                }
            }).catch((err) => {
                // console.log(err, 'ERROR')
                // alert.show(err.response?.data?.message)
            })

    }
}