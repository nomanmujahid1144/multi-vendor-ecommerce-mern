import { useState, useEffect } from "react"
import { Modal } from "../minor-components/Modal"
import { useDispatch, useSelector } from "react-redux";
import { selectProgressBarState } from "../../redux/Actions/ProgressBarActions";
import { axiosInstance } from "../../constants/axiosInstance";
import { Loader } from "../minor-components/Loader";
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router";

export const AppSettings = () => {
    const alert = useAlert()
    const navigate = useNavigate()
    const [state, setState] = useState({
        totalTax: '',
        pricePerMile: ''
    })
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );
    const token = useSelector(
        (state) => state.ProfileReducer
    );
    useEffect(() => {
        getTax()
    }, [])
    const getTax = async () => {
        dispatch(selectProgressBarState(true))
        try {
            const res = await axiosInstance.get('/api/v1/admin/gettax', {
                headers: {
                    "Authorization": token
                }
            })
            if (res.data.success) {
                dispatch(selectProgressBarState(false))
                setState(res.data.data)
            }
            else {
                dispatch(selectProgressBarState(false))
                alert.show('No Tax Found')
            }
        }
        catch (e) {
            dispatch(selectProgressBarState(false))
            navigate('/')
        }

    }

    const addTax = async () => {
        dispatch(selectProgressBarState(true))
        try {
            const res = await axiosInstance.post('/api/v1/admin/settax',
                { totalTax: state.totalTax, pricePerMile: state.pricePerMile },
                {
                    headers: {
                        "Authorization": token
                    }
                })
            if (res.data.success) {
                dispatch(selectProgressBarState(false))
                alert.show('Tax added successfully')
                setIsOpen(false)
                setState(res.data.data)
            }
            else {
                dispatch(selectProgressBarState(false))
                alert.show('No Tax Found')
            }
        }
        catch (e) {
            navigate('/')
        }

    }
    return (
        <div className='py-8 bg-gray-50 min-h-screen'>
            {!loading ? (
                <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                    <div className=' bg-white py-4 px-4 rounded-lg  shadow-lg divide-y  divide-gray-100'>
                        <div className='h-10 my-0 flex flex-col items-start justify-between'>
                            <h2 className='font-semibold text-gray-800 text-lg'>App Setting</h2>
                            <p className='text-xs'>Customize your App</p>
                        </div>
                        <p className="border-b-2 my-2"></p>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}