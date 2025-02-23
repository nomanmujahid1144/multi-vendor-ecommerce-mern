import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectProgressBarState } from '../../redux/Actions/ProgressBarActions'
import { axiosInstance } from "../../constants/axiosInstance"
import { DashMap } from "../minor-components/DashMap"
import { Modal } from "../minor-components/Modal"
import { Loader } from "../minor-components/Loader"
import { useAlert } from "react-alert"
import { baseURL } from "../../constants/baseURL"
import DefaultImage from '../../assets/Default.png'

export const AllRestaurants = () => {
    const token = useSelector(
        (state) => state.ProfileReducer
    );
    const alert = useAlert()
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    const [cardData, setCardData] = useState([])
    const [userData, setUserData] = useState([])
    const [placesArr, setPlacesArr] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [coordinates, setCoordinates] = useState([])
    useEffect(() => {
        if (token) {
            getRadius()
        }
    }, [token])
    const getRadius = async () => {
        try {
            const res = await axiosInstance.get('/api/v1/restaurant/getradius', {
                headers: {
                    "Authorization": token
                }
            })
            if (res.data.success) {
                dispatch(selectProgressBarState(false))
                setPlacesArr(res.data.data)
            }
            else {
                dispatch(selectProgressBarState(false))
                alert.show('No Radius Found')
            }
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            {!loading ? (
                <div className="bg-gray-50 z-0">
                    <div className=" mt-24 bg-gray-50 ml-[20%] w-[78%]">
                        <div className="m-0 p-0">
                            <div className="px-4">
                                {coordinates.length > 0 ? (
                                    <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                                        <DashMap coordinates={coordinates} />
                                    </Modal>
                                ) : null}
                            </div>
                            <div className=' bg-white py-4 px-4 my-4 rounded-lg  shadow-lg divide-y  divide-gray-100'>
                                <div className='h-10 my-0 flex flex-col items-start justify-between mb-4'>
                                    <h2 className='font-semibold text-gray-800 text-lg'>Restaurant Address</h2>
                                    <p className='text-xs'>Details</p>
                                </div>
                                {placesArr.length < 1 ? <h2>No Places Found</h2> :
                                    <div className="w-full  mx-auto bg-white shadow-lg rounded-sm ">
                                        <div className="py-3 ">
                                            <div className="overflow-x-auto ">
                                                <table className="table-auto w-full ">
                                                    <thead className="text-sm w-full h-14 bg-myBg font-semibold uppercase text-gray-600 ">
                                                        <tr>
                                                            <th key={5} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                Restaurant Image
                                                            </th>
                                                            <th key={5} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                Restaurant Name
                                                            </th>
                                                            <th key={1} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                Address
                                                            </th>
                                                            <th key={6} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                Delivery Charges
                                                            </th>
                                                            <th key={3} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                Map
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm  divide-gray-100">
                                                        {placesArr.map((item, index) => (
                                                            <>
                                                                <tr key={index}>
                                                                    <td className={`text-left  px-2 py-8 whitespace-nowrap ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                                                        <img src={`  ${item.restaurantImage ? baseURL + item.restaurantImage : DefaultImage} `} className={`text-left text-xs w-14 h-14 rounded-[50%]`} />
                                                                    </td>
                                                                    <td className={`text-left  px-2 py-8 whitespace-nowrap ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                                                        <p className={`text-left text-md `}> {item.shopName}</p>
                                                                    </td>
                                                                    <td className={`text-left  px-2 py-8 whitespace-nowrap ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                                                        <p className={`text-left text-md `}> {item.formattedAddress}</p>
                                                                    </td>
                                                                    <td className={`text-left  px-2 py-8 whitespace-nowrap ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                                                        <p className={`text-left text-md `}> R{item.delivery}</p>
                                                                    </td>

                                                                    <td className={`text-left  px-2 py-8 whitespace-nowrap ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                                                        <p className={`text-left text-md `}>
                                                                            <button
                                                                                onClick={() => {
                                                                                    setCoordinates(item.geometry.coordinates)
                                                                                    setIsOpen(true)
                                                                                }}
                                                                                className='py-2 px-4 bg-myBg text-xs rounded-lg hover:bg-[#efca37]'>
                                                                                View on map
                                                                            </button>
                                                                        </p>
                                                                    </td>

                                                                </tr>
                                                            </>

                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}

        </>
    )

}