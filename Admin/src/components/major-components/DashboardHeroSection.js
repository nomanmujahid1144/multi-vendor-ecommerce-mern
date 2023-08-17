import { DashCard } from "../minor-components/DashCard"
import dashCardOrder from '../../assets/dash-card-order.png'
import dashCardCart from '../../assets/dash-card-cart.png'
import dashCardPending from '../../assets/dash-card-pending.png'
import dashCardCannabis from '../../assets/dash-card-cannabis.png'
import { Table } from "../minor-components/Table"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectProgressBarState } from '../../redux/Actions/ProgressBarActions'
import { axiosInstance } from "../../constants/axiosInstance"
import { DashMap } from "../minor-components/DashMap"
import { Modal } from "../minor-components/Modal"
import { Loader } from "../minor-components/Loader"
import { useAlert } from "react-alert"



const usersColumns = [
    "User Name",
    "User Email",
    "Phone Number"
]
const DashboardHeroSection = (props) => {


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
            loadUsers()
            getRadius()
            loadDashboardData()
        }
    }, [token])
    const getRadius = async () => {
        try {
            const res = await axiosInstance.get('/api/v1/admin/getradius', {
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
    const loadDashboardData = async () => {
        try {
            dispatch(selectProgressBarState(true))
            const res = await axiosInstance.get('/api/v1/admin/getdashboarddata', {
                headers: {
                    "Authorization": token
                }
            })
            if (res.data.success) {
                setCardData(res.data.data)
                dispatch(selectProgressBarState(false))
            }
            else {
                dispatch(selectProgressBarState(false))
                alert.show('Not Found')
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    const loadUsers = async () => {
        try {
            dispatch(selectProgressBarState(true))
            const res = await axiosInstance.get('/api/v1/user/getallusers', {
                headers: {
                    "Authorization": token
                }
            })
            if (res.data.success) {
                setUserData(res.data.data)
                dispatch(selectProgressBarState(false))
            }
            else {
                dispatch(selectProgressBarState(false))
                alert.show('Not Found')
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
                            <div className="pt-4">
                                <h1 className="text-3xl mx-0 px-0">
                                    Dashboard
                                </h1>
                                <p className="text-xs ml-1">
                                    Dashboard
                                </p>
                            </div>
                            <div className="flex items-center w-full flex-wrap justify-between py-4 px-1">
                                <DashCard bg='bg-red-100' header={'Total Orders'} data={cardData[0]?.totalAllOrders} icon={dashCardOrder} footer={cardData[0]?.last24HoursAllOrders} />
                                <DashCard bg='bg-lime-100' header={'Pending Orders'} data={cardData[1]?.totalPendingOrders} icon={dashCardPending} footer={cardData[1]?.last24HoursPendingOrders} />
                                <DashCard bg='bg-sky-200' header={'Completed Orders'} data={cardData[2]?.totalCompletedOrders} icon={dashCardCart} footer={cardData[2]?.last24HoursCompletedOrders} />
                                <DashCard bg='bg-green-100' header={'Total Products'} data={cardData[3]?.totalAddedProducts} icon={dashCardCannabis} footer={cardData[3]?.last24HoursAddedProducts} />
                            </div>
                            {/* <div>
                            <TrakingDetails />
                        </div> */}
                            <div className="flex justify-between px-1 gap-2 my-8">
                                <div className="w-full">
                                    {userData.length > 0 ? <Table type={"users"} title={"Users"} key={parseInt(Math.random() * 10000)} ordersColumns={usersColumns} ordersData={userData} /> : <div className="flex justify-center items-center py-8 text-lg">No Orders Found</div>}
                                </div>
                                {/* <Recentorders />
                            <TimeLine /> */}
                            </div>
                            <div className="px-4">
                                {/* <Table /> */}
                                {/* <ActionsTable /> */}
                                {coordinates.length > 0 ? (
                                    <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                                        <DashMap coordinates={coordinates} />
                                    </Modal>
                                ) : null}
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
export default DashboardHeroSection