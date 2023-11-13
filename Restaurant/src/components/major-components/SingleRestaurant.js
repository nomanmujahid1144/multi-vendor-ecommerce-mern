import { ActionsTable } from "../minor-components/ActionsTable"
import { getProducts, getRestaurantProducts } from "../../redux/Actions/ProductActions"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { selectProgressBarState } from '../../redux/Actions/ProgressBarActions'
import { getSingleRestaurantOrders } from '../../redux/Actions/OrderAction'
import { axiosInstance } from "../../constants/axiosInstance"
import { DashMap } from "../minor-components/DashMap"
import { Modal } from "../minor-components/Modal"
import { Loader } from "../minor-components/Loader"
import { useAlert } from "react-alert"
import { useParams } from 'react-router-dom';
import { baseURL } from "../../constants/baseURL"
import DefaultImage from '../../assets/Default.png'

////////////////////////////////// PRODUCTS ///////////////////////////// 
const tableColumnsReal = [
    'Photo',
    'Name',
    'Type',
    'Category',
    'Sub-Category',
    'Brand',
    'Price',
    // 'Effects (upl, eup, ene, cre, foc)',
    'Actions'
]
////////////////////////////////// Orders ///////////////////////////// 
const tableColumnsRealOrders = [
    // 'Order No',
    'Products',
    'Quantity',
    'Total Price',
    'Deliery Cost',
    'Total Price',
    'Order Status',
]



////////////////////////////////// RESTAURANTS/////////////////////////////    
const usersColumns = [
    "User Name",
    "User Email",
    "Phone Number"
]
export const SingleRestaurant = (props) => {
    let location = useLocation();
    const params = useParams();

    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const restaurantName = capitalizeWords(params.restaurantName);
    let preRestaurant = restaurantName;

    const token = useSelector(
        (state) => state.ProfileReducer
    );

    const alert = useAlert()
    const dispatch = useDispatch()

    const [placesArr, setPlacesArr] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [coordinates, setCoordinates] = useState([])
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)


    const { restaurantProducts } = useSelector(
        (state) => state.productReducer
    );
    const { orders } = useSelector(
        (state) => state.orderReducer
    );
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    useEffect(() => {
        if (token) {
            getSingleRadius()
            dispatch(getRestaurantProducts())
        }
    }, [token], [isOpen, isUpdateOpen])

    const getSingleRadius = async (req, res) => {
        try {

            if (preRestaurant === restaurantName) {

                const res = await axiosInstance.get('/api/v1/admin/getsingleradius', { params: { restaurantName: restaurantName } })
                if (res.data.success) {
                    dispatch(selectProgressBarState(false))
                    const id = res.data.data.products.restaurantID
                    dispatch(getSingleRestaurantOrders(id))
                    setPlacesArr(res.data.data)

                }
                else {
                    dispatch(selectProgressBarState(false))
                    alert.show('No Radius Found')
                }
            } else {
                preRestaurant = restaurantName;
                window.location.reload();
            }


        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            {!loading ? (
                <>
                    <div className="bg-gray-50 z-0">
                        <div className=" mt-24 bg-gray-50 ml-[20%] w-[78%]">
                            <div className="mt-24">
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
                                                                <th key={4} className="p-2 whitespace-nowrap font-semibold text-left">
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-sm  divide-gray-100">
                                                            {/* {placesArr.map((item, index) => ( */}
                                                            <tr >
                                                                <td className={`text-left  px-2 py-8 whitespace-nowrap `}>
                                                                    <img src={`  ${placesArr.restaurantImage ? baseURL + placesArr.restaurantImage : DefaultImage} `} className={`text-left text-xs w-14 h-14 rounded-[50%]`} />
                                                                </td>
                                                                <td className={`text-left  px-2 py-8 whitespace-nowrap bg-white `}>
                                                                    <p className={`text-left text-md `}> {placesArr.shopName}</p>
                                                                </td>
                                                                <td className={`text-left  px-2 py-8 whitespace-nowrap bg-white `}>
                                                                    <p className={`text-left text-md `}> {placesArr.formattedAddress}</p>
                                                                </td>
                                                                <td className={`text-left  px-2 py-8 whitespace-nowrap bg-white `}>
                                                                    <p className={`text-left text-md `}> R{placesArr.delivery}</p>
                                                                </td>

                                                                <td className={`text-left  px-2 py-8 whitespace-nowrap  bg-white`}>
                                                                    <p className={`text-left text-md `}>
                                                                        <button
                                                                            onClick={() => {
                                                                                setCoordinates(placesArr.geometry.coordinates)
                                                                                setIsOpen(true)
                                                                            }}
                                                                            className='py-2 px-4 bg-myBg text-xs rounded-lg hover:bg-[#efca37]'>
                                                                            View on map
                                                                        </button>
                                                                    </p>
                                                                </td>

                                                            </tr>

                                                            {/* // ))} */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50   z-0">
                        <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                            {
                                orders.length === 0 ? (
                                    <div className="flex justify-center items-center py-8 text-lg h-screen">No Order Found</div>
                                )
                                    : (
                                        <ActionsTable isOpen={isUpdateOpen} tableColumnsReal={tableColumnsRealOrders} checkBox={true} isOrders={true} modal={setIsUpdateOpen} key={parseInt(Math.random() * 10000)} tableDataReal={orders} />
                                    )
                            }
                        </div>
                    </div>
                </>

            ) : (
                <Loader />
            )}

        </>
    )

}
// export default SingleRestaurant