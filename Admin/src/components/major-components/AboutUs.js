import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addaboutUs, getAboutUs } from '../../redux/Actions/AboutUsAction.js';
import { Loader } from "../minor-components/Loader";
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router";

export const AboutUs = () => {
    const alert = useAlert()
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({
        aboutus: ""
    });

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );
    const { aboutUs } = useSelector(
        (state) => state.aboutUsReducer
    );

    useEffect(() => {
        dispatch(getAboutUs())
    }, [isOpen])

    const submit = async (e) => {
        dispatch(addaboutUs(credentials.aboutus, navigate, alert,))
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };


    return (
        <div className='py-8 bg-gray-50 min-h-screen'>
            {!loading ? (
                <div className=" mt-24 bg-gray-50 ml-[20%]  w-[78%]">
                    <div className=' bg-white py-4 px-4 rounded-lg  shadow-lg divide-y  divide-gray-100'>
                        <div className='h-10 my-0 flex flex-col items-start justify-between'>
                            <h2 className='font-semibold text-gray-800 text-lg'>About Us</h2>
                            <p className='text-xs'>Customize your App</p>
                        </div>
                        <p className="border-b-2 my-2"></p>
                        <div className="pt-5">
                            <h5 className="py-3">About Us</h5>
                            <textarea onChange={onChange} value={credentials.aboutus} name="aboutus" class="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5">
                            </textarea>
                            <div className="flex items-center justify-end py-4 px-4">
                                <button onClick={submit} className='bg-myBg text-gray-600 px-4 py-2 cursor-pointer hover:bg-[#45b6fe]'>
                                    Add More
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className='my-5 bg-white py-4 px-4 rounded-lg  shadow-lg divide-y  divide-gray-100'>
                        <div className='h-10 my-0 flex flex-col items-start justify-between'>
                            <h2 className='font-semibold text-gray-800 text-lg'>About Us</h2>
                            {/* <p className='text-xs'>Customize your App</p> */}
                        </div>
                        {aboutUs?.aboutUs?.map((about, index) => (
                            <div key={index} class="bg-white my-3 rounded-lg shadow-lg p-6">
                                <p class="text-gray-600">{about}</p>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}