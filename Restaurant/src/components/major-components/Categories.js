import { ActionsTable } from "../minor-components/ActionsTable"
import { useEffect, useState } from "react"
import { getRestaurantCategories } from "../../redux/Actions/CategoryActions"
import { useSelector, useDispatch } from "react-redux"
import { Modal } from "../minor-components/Modal"
import { AddCategoriesForm } from "../minor-components/AddCategoriesForm"

const tableColumnsReal = [
    'Photo',
    'Brand',
    'Category',
    'Sub-Category',
    'Type',
    'Actions'
]
export const Categories = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)


    const { restaurantCategories } = useSelector(
        (state) => state.categoryReducer
    );
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    useEffect(() => {
        dispatch(getRestaurantCategories())
    }, [isOpen, isUpdateOpen])

    return (
        <>
            <div className="bg-gray-50   z-0">
                {/* {!loading ? ( */}
                <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                    <div className="flex items-center justify-end py-4 px-4">
                        <button onClick={() => {
                            setIsOpen(true)
                        }}
                            className='bg-myBg text-gray-600 px-4 py-2 cursor-pointer hover:bg-[#E9D95D]'>
                            Add Category
                        </button>
                    </div>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                        <AddCategoriesForm modal={setIsOpen} isAdd={true} />
                    </Modal>
                    {
                        restaurantCategories.length === 0 ? (
                            <div className="flex justify-center items-center py-8 text-lg h-screen">No Category Found</div>
                        )
                            : (
                                <ActionsTable isOpen={isUpdateOpen} tableColumnsReal={tableColumnsReal} checkBox={true} isCategory={true} modal={setIsUpdateOpen} key={parseInt(Math.random() * 10000)} tableDataReal={restaurantCategories} />
                            )
                    }
                </div>
                {/* ):(
                <Loader />
            )} */}

            </div>
        </>
    )
}