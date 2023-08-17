import { Loader } from "../minor-components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DefaultImage from '../../assets/Default.png'
import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "../../redux/Actions/ProgressBarActions";
import { baseURL } from "../../constants/baseURL";
import { useAlert } from 'react-alert'
export const TrakingDetails = () => {

    const [orderId, setOrderId] = useState({
        orderId: ''
    })

    const [order, setOrder] = useState({})
    const [check, isCheck] = useState(false)
    const [heading, setHeading] = useState('')
    const alert = useAlert()
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(selectProgressBarState(true))
        await axiosInstance.get('/api/v1/order/getorderbyorderid', {
            params: {
                orderid: orderId.orderId
            }
        })
            .then((res) => {
                dispatch(selectProgressBarState(false))
                setOrder(res.data.data)
                if (res.data.data.status === 0) {
                    setHeading('Order is Pending')
                } else if (res.data.data.status === 1) {
                    setHeading('Order is Preparing')
                } else if (res.data.data.status === 2) {
                    setHeading('Driver Pick the Order and he is on the Way.')
                } else {
                    setHeading('Order Completed Successfully')
                }
                isCheck(true)
            })
            .catch(() => {
                dispatch(selectProgressBarState(false))
                isCheck(false)
                alert.show('No Such Order Found')
            })
    }

    const onChange = (e) => {
        setOrderId({ ...orderId, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className='py-8 bg-gray-50 min-h-screen'>
                {!loading ? (
                    <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                        <div className=' bg-white py-4 px-4 rounded-lg  shadow-lg divide-y  divide-gray-100'>
                            <div className='h-10 my-0 flex flex-col items-start justify-between'>
                                <h2 className='font-semibold text-gray-800 text-lg'>Track Order</h2>
                                <p className="text-xs">Tracking Details</p>
                            </div>
                            <p className="border-b-2 my-2"></p>
                            <div className="flex items-center justify-center py-4 gap-8">
                                <div className="">
                                    <form onSubmit={handleSubmit}>
                                        <input className='py-2 px-2 mb-[5px] mt-0 text-[#E9C95D] placeholder-orange-300 outline-0 text-xs rounded hover:outline-0 focus:outline-none border border-orange-300 w-60' placeholder="Enter Tracking Id" type='number' value={orderId.orderId} onChange={onChange} name='orderId' />
                                        <button className="bg-myBg pb-[10px] pt-[8px] px-4 mt-[5px] ml-[-3px] inline-block mb-[-5px] rounded text-sm cursor-pointer">
                                            Track
                                        </button>
                                    </form>
                                    {/* <p className="text-xs mt-[-5px] text-[#E9C95D]">Your Order is preparing</p> */}
                                </div>

                                {/* <div className="flex flex-col flex-2 items-start justify-center  ">
                                    {orderStatus.map((status , index) => (
                                        <>
                                            <div className="flex items-center justify-center ">
                                                <div className="flex items-center justify-center  border-2 border-orange-300 h-8 w-8 rounded">
                                                    <p className=" text-xs text-[#E9C95D]">1</p>
                                                </div>
                                                <span className="border-b-2 border-orange-300 w-24"></span>

                                            </div>
                                            <div className="flex items-center justify-center">
                                                <p className="text-xs text-[#E9C95D]">
                                                    Ordered
                                                </p>
                                                <span className="w-20"></span>
                                            </div>
                                        </>
                                    ))}
                                </div> */}
                            </div>
                            {check ?
                                <div className="w-[100%]">
                                    <div className="py-14 px-4  md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                                        <div className="flex justify-start item-start space-y-2 flex-col">
                                            <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order.orderid}</h1>
                                            <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{order.date} at {order.time}</p>
                                            <p className="text-myBg dark:text-gray-300 font-medium leading-6">{heading}</p>
                                        </div>
                                        <div className="mt-10 flex  xl:flex-row jusitfy-center items-stretch w-full space-x-8 md:space-y-6 space-y-0">
                                            <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-start md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                                                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer Details</h3>
                                                <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                                                        <div className="flex justify-start w-full md:justify-start items-center space-x-4 py-8  border-gray-200">
                                                            <img className="h-16 w-16" src={`${order?.userId?.profilePhoto ? baseURL + order?.userId?.profilePhoto : DefaultImage}`} alt="avatar" />
                                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                                <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{order.userId?.firstName + order.userId?.lastName}</p>
                                                                <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{order.userId?.email}</p>
                                                                <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{order.userId?.phoneNumber}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {order?.driverId ?
                                                        <>
                                                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Driver Details</h3>
                                                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                                                <div className="flex justify-start w-full md:justify-start items-center space-x-4 py-8  border-gray-200">
                                                                    <img className="h-16 w-16" src={`${order?.driverId?.profilePhoto ? baseURL + order?.driverId?.profilePhoto : DefaultImage}`} alt="avatar" />
                                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                                        <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{order.driverId?.fullName}</p>
                                                                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{order.driverId?.email}</p>
                                                                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{order.driverId?.phoneNumber}</p>
                                                                    </div>
                                                                </div>
                                                                {order.status !== 5 ?
                                                                    <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                                                        <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 rounded border   w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Track Driver</button>
                                                                    </div>
                                                                    : null}
                                                            </div>
                                                        </>
                                                        : null}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                                <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                                            <div className="flex justify-center md:justify-start bottom-2 xl:flex-row flex-row md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                                                <div className="flex items-center border-r-2 md:items-start flex-col space-y-4 xl:mt-8">
                                                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order.restaurantID?.formattedAddress}</p>
                                                                </div>
                                                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order.userId?.formattedAddress}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                            <div className="flex justify-between w-full">
                                                                <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                                                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${order.subTotal}</p>
                                                            </div>
                                                            <div className="flex justify-between items-center w-full">
                                                                <p className="text-base dark:text-white leading-4 text-gray-800">Delivery Charges</p>
                                                                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${order.deliveryCost}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center w-full">
                                                            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                                            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${order.grandTotalPrice}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                :
                                null}

                        </div>
                    </div>

                ) : (
                    <Loader />
                )}
            </div>
        </>
    )
}