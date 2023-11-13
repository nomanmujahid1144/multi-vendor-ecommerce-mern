import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../constants/axiosInstance'
import { Table } from '../minor-components/Table'
import { Loader } from '../minor-components/Loader'
import { useSelector, useDispatch } from "react-redux"
import io from 'socket.io-client';
import { selectProgressBarState } from '../../redux/Actions/ProgressBarActions'


const ordersColumns = [
    "Order No.",
    "Restaurant Name",
    "Product Name",
    "Product Qty.",
    "Total Price",
    "User Name",
    "User Phone No.",

]
export const Orders = () => {
    const token = useSelector(
        (state) => state.ProfileReducer
    );
    const [forceReload, setForceReload] = useState(false)
    const [pendingOrders, setPendingOrders] = useState([])
    const [approvedOrders, setApprovedOrders] = useState([])
    const [unAssignedOrders, setUnAssignedOrders] = useState([])
    const [unAssignedDrivers, setUnAssignedDrivers] = useState([])
    const [acceptedOrders, setAcceptedOrders] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])
    const dispatch = useDispatch()
    const loading = useSelector(

        (state) => state.ProgressBarReducer
        
    );
    useEffect(() => {
        if (token) {
            getAllOrders()
        }
        const interval = setInterval(() => {
            dispatch(selectProgressBarState(false))
          }, 5000);
          return () => clearInterval(interval);
    }, [forceReload, token])

    useEffect(() => {
        const socket = io(process.env.NODE_LOCAL_SERVER);
        socket.on('newOrder', () => {
            setForceReload(!forceReload)
        });
      }, []);
   
    const getAllOrders = async () => {
        dispatch(selectProgressBarState(true))
        const orders = await axiosInstance.get(`/api/v1/order/get-all-restaurant-orders`, {
            headers: {
                "Authorization": token
            }
        })
        if (orders.data.success) {
            console.log(orders.data, 'DATA')
            let filteredData = orders?.data?.data?.pendingOrder.map((item) => {
                return {
                    id: item._id,
                    orderid : item.orderid,
                    productName: item.details.map((item2) => {
                        return item2.productId.name
                    }).join(" / "),
                    productQuantity: item.details.map((item2) => {
                        return item2.quantity
                    }).join(' / '),
                    restaurnatName: item.restaurantId.restaurantName,
                    totalPrice: item.totalPrice,
                    userName: item.userId.fullName,
                    userEmail: item.userId.email,
                    userPhoneNumber: item.userId.phoneNumber,
                }
            })
            setPendingOrders(filteredData)
            let filteredDataApproved = orders?.data?.data?.approvedOrder.map((item) => {
                return {
                    id: item._id,
                    orderid : item.orderid,
                    productName: item.details.map((item2) => {
                        return item2.productId.name
                    }).join(" / "),
                    productQuantity: item.details.map((item2) => {
                        return item2.quantity
                    }).join(' / '),
                    restaurnatName: item.restaurantId.restaurantName,
                    totalPrice: item.totalPrice,
                    userName: item.userId.fullName,
                    userEmail: item.userId.email,
                    userPhoneNumber: item.userId.phoneNumber,
                }
            })
            setApprovedOrders(filteredDataApproved)
            let filteredDataAccepted = orders?.data?.data?.acceptedOrder.map((item) => {
                return {
                    id: item._id,
                    orderid : item.orderid,
                    productName: item.details.map((item2) => {
                        return item2.productId.name
                    }).join(" / "),
                    productQuantity: item.details.map((item2) => {
                        return item2.quantity
                    }).join(' / '),
                    restaurnatName: item.restaurantId.restaurantName,
                    totalPrice: item.totalPrice,
                    userName: item.userId.fullName,
                    userEmail: item.userId.email,
                    userPhoneNumber: item.userId.phoneNumber,
                }
            })
            setAcceptedOrders(filteredDataAccepted)
            let filteredDataUnAssigned = orders?.data?.data?.unAssignedOrders.map((item) => {
                return {
                    id: item._id,
                    orderid : item.orderid,
                    productName: item.details.map((item2) => {
                        return item2.productId.name
                    }).join(" / "),
                    productQuantity: item.details.map((item2) => {
                        return item2.quantity
                    }).join(' / '),
                    status : item.status,
                    range : item.restaurantId.radius,
                    geometry : item.restaurantID.geometry.coordinates,
                    restaurnatName: item.restaurantId.restaurantName,
                    totalPrice: item.grandTotalPrice,
                    userName: item.userId.firstName,
                    userEmail: item.userId.email,
                    userPhoneNumber: item.userId.phoneNumber,
                    drivers : item.drivers
                }
            })
            setUnAssignedOrders(filteredDataUnAssigned)
            let filteredDataCompleted = orders?.data?.data?.completedOrder.map((item) => {
                return {
                    id: item._id,
                    orderid : item.orderid,
                    productName: item.details.map((item2) => {
                        return item2.productId.name
                    }).join(" / "),
                    productQuantity: item.details.map((item2) => {
                        return item2.quantity
                    }).join(' / '),
                    restaurnatName: item.restaurantId.restaurantName,
                    totalPrice: item.totalPrice,
                    userName: item.userId.fullName,
                    userEmail: item.userId.email,
                    userPhoneNumber: item.userId.phoneNumber,
                }
            })
            setCompletedOrders(filteredDataCompleted)
            dispatch(selectProgressBarState(false))
        }
        else {
            dispatch(selectProgressBarState(false))
        }

    }
    return (
        <>
            <div className={`py-8 bg-gray-50 min-h-screen`}>
                <div className={`bg-gray-50 ml-[20%]  w-[78%] mt-24 `}>
                    {!loading ? (
                        <div className="bg-gray-50">
                            <div className=" mt-12">
                                <div className='flex flex-col '>
                                    {pendingOrders.length !== 0 && !loading ?
                                        <Table type={"orders"} title={"Pending Orders"} forceReload={forceReload} setForceReload={setForceReload} pendingOrders={true} ordersColumns={ordersColumns} ordersData={pendingOrders} /> :
                                        <div className='divide-y  divide-gray-100 bg-white rounded-lg  shadow-lg'>
                                            <div className='px-5 pt-4  h-10 my-0 flex flex-col items-start justify-between'>
                                                <h2 className='font-semibold text-gray-800 text-lg'>Pending Orders</h2>
                                                <p className='text-xs'>Details</p>
                                            </div>
                                            <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className=" mt-12">
                                <div className='flex flex-col '>
                                    {approvedOrders.length !== 0 ?
                                        <Table type={"orders"} title={"Approved Orders"} forceReload={forceReload} setForceReload={setForceReload}  ordersColumns={ordersColumns} approvedOrders={true} ordersData={approvedOrders} /> : <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>}
                                </div>
                            </div>
                            <div className=" mt-12">
                                <div className='flex flex-col '>
                                    {unAssignedOrders.length !== 0 ?
                                        <Table type={"orders"} title={"Un Assigned Orders"} forceReload={forceReload} setForceReload={setForceReload}  ordersColumns={ordersColumns} unAssignedOrders={true} drivers={unAssignedDrivers} ordersData={unAssignedOrders} /> : <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>}
                                </div>
                            </div>
                            <div className=" mt-12">
                                <div className='flex flex-col '>
                                    {acceptedOrders.length !== 0 ?
                                        <Table type={"orders"} title={"Accepted Orders"} ordersColumns={ordersColumns} acceptedOrders={true} ordersData={acceptedOrders} /> : <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>}
                                </div>
                            </div>
                            <div className=" mt-12">
                                <div className='flex flex-col '>
                                    {completedOrders.length !== 0 ?
                                        <Table type={"orders"} title={"Completed Orders"} ordersColumns={ordersColumns} completedOrders={true} ordersData={completedOrders} /> : <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>}
                                </div>
                            </div>
                        </div>

                    ) : (
                        <Loader />
                    )} 
                </div>
            </div>
        </>

    )
}
