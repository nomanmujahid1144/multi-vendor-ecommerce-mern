
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { axiosInstance } from "../../constants/axiosInstance"

export const ViewDriverDetails = ({ showDetails }) => {
    const [coords, setCoords] = useState(null)
    const [placesArr, setPlacesArr] = useState([])
    const [driverArr, setDriverArr] = useState([])

    // const alert = useAlert()
    useEffect(() => {
        setCoords(showDetails)
        getRadius()
    }, [])

    const getRadius = async () => {
        try {
            const res = await axiosInstance.get('/api/v1/driver/getdriverbyid', { params: { driverId: showDetails._id } })

            if (res.data.success) {
                setPlacesArr(res.data.data)
                await axiosInstance.get('/api/v1/order/getAllCompletedOrdersByDriverId', { params: { driverId: showDetails._id } })
                    .then((res) => {
                        let filteredData = res.data.data.map((item) => {
                            return {
                                id: item.orderid,
                                productName: item.details.map((item2) => {
                                    return item2.productId.name
                                }),
                                productQuantity: Object.values(item.details).map((item2) => {
                                    return item2.quantity
                                }),
                                productPrice: Object.values(item.details).map((item2) => {
                                    return item2.productTotal
                                }),
                                totalPrice: item.subTotal,
                                date: item.date,
                                time: item.time,
                                city: item.city,
                                address: item.userId.formattedAddress,
                                userName: item.userId.firstName,
                                userEmail: item.userId.email,
                                userPhoneNumber: item.userId.phoneNumber,
                            }
                        })
                        setDriverArr(filteredData)
                    }).catch((err) => {

                    })
            }
            else {
                // dispatch(selectProgressBarState(false))
                // alert.show('No Radius Found')
            }
        }
        catch (e) {
            console.log(e)
        }

    }


    return (
        <>
            {showDetails ? (
                <>
                    <div class="w-full h-[85vh] p-7" >
                        <div style={{ scrollbarWidth: 'thin' }} className="container h-full mx-auto overflow-y-scroll">
                            <div className="flex justify-center">
                                {placesArr.length < 1 ? <h2>No Order Found</h2> :

                                    <div className="w-full flex flex-col">
                                        <div className="w-full xl:w-[100%] md:w-full bg-white rounded-lg ">
                                            <h3 className="pt-4 text-2xl mt-8 font-bold">Driver Detail</h3>
                                            <div className="bg-gray-100">
                                                <div className=" mx-auto my-5 p-5">
                                                    <div className="md:flex no-wrap md:-mx-2 ">
                                                        <div className="w-full md:w-9/12 mx-2 h-auto">
                                                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                                                <div className="text-gray-700">
                                                                    <div className="grid md:grid-cols-2 text-sm">
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">Name</div>
                                                                            <div className="px-4 py-2">{placesArr.fullName}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">Phone Number</div>
                                                                            <div className="px-4 py-2">{placesArr.phoneNumber}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">Email</div>
                                                                            <div className="px-4 py-2">{placesArr.email}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">Driving Licence</div>
                                                                            <div className="px-4 py-2">{placesArr.drivingLicense}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">vehicle Name</div>
                                                                            <div className="px-4 py-2">{placesArr.vehicleName}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">vehicle Number</div>
                                                                            <div className="px-4 py-2">{placesArr.vehicleNumber}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">vehicle Color</div>
                                                                            <div className="px-4 py-2">{placesArr.vehicleColor}</div>
                                                                        </div>
                                                                        <div className="grid grid-cols-2">
                                                                            <div className="px-4 py-2 font-semibold">Total Earning</div>
                                                                            <div className="px-4 py-2">R {placesArr.totalEarning}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full xl:w-[100%] bg-white rounded-lg ">
                                            <h3 className="pt-4 text-2xl  mt-8 font-bold">Driver Order's Detail</h3>
                                            <div className=" ">
                                                <div className="border border-1 border-gray-400  bg-white rounded mt-4 p-4  justify-between leading-normal">
                                                    <div className="overflow-x-auto relative">
                                                        <table className="w-full text-sm text-left overflow-x-auto text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs  text-gray-700 uppercase bg-myBg dark:bg-gray-700 dark:text-gray-400">
                                                                <tr>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Index
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Order ID
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Product name
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Product Price
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Total Price
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Date
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Time
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {driverArr.map((items, index) => (
                                                                    <>
                                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                            <td className="py-4 px-6">
                                                                                {index + 1}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.id}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.productName.map((product) => { return product }).join('/')}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.productPrice.map((product) => { return product }).join('/')}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.productQuantity.map((product) => { return product }).join('/')}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.totalPrice}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.date}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {items.time}
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                ))}
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}

        </>

    )
}