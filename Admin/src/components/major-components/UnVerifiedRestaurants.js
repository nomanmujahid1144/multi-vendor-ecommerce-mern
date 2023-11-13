import { ActionsTable } from "../minor-components/ActionsTable"
import { useEffect, useState, useMemo } from "react"
import { getProducts } from "../../redux/Actions/ProductActions"
import { useSelector, useDispatch } from "react-redux"
import { Modal } from "../minor-components/Modal"
import { AddProductsForm } from "../minor-components/AddProductsForm"
import { getUnApprovedRestaurants } from "../../redux/Actions/RestaurantAction"
import { Loader } from "../minor-components/Loader"

const tableColumnsReal = [
    'Restaurant Logo',
    'Restaurant Name',
    'Owner Name',
    'Phone Number',
    'Zone',
    'Tax',
    'View',
    'Actions'
]
export const UnVerifiedRestaurants = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)


    const { unApprovedRestaurants } = useSelector(
        (state) => state.restaurantReducer
    );
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    useEffect(() => {
        dispatch(getUnApprovedRestaurants());
    }, [isOpen, isUpdateOpen]);

    return (
        <>
            <div className="bg-gray-50   z-0">
                {!loading ? (
                <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                    <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                        <AddProductsForm modal={setIsOpen} isAdd={true} />
                    </Modal>
                    {unApprovedRestaurants?.length === 0 ? (
                        <div className="flex justify-center items-center py-8 text-lg h-screen">No Restaurants Found</div>
                        ): (
                                <ActionsTable
                                    isOpen={isUpdateOpen}
                                    tableColumnsReal={tableColumnsReal}
                                    checkBox={true}
                                    isUnApprovedRestaurants={true}
                                    modal={setIsUpdateOpen}
                                    key={parseInt(Math.random() * 10000)}
                                    tableDataReal={unApprovedRestaurants}
                                />
                        )
                    }
                </div>
                ):(
                    <Loader />
                )}
            </div>
        </>
    )
}