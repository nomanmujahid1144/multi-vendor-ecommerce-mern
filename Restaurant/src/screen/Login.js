import { Link } from "react-router-dom"
import logo from '../assets/logo2.png'
import { useDispatch, useSelector } from "react-redux";
import { selectProgressBarState } from "../redux/Actions/ProgressBarActions";
import { adminLogin } from "../redux/Actions/ProfileActions";
import { useAlert } from 'react-alert'
import { useState } from "react";
import { axiosInstance } from "../constants/axiosInstance";
import { Loader } from "../components/minor-components/Loader";
import { useNavigate } from 'react-router';
import { BackGroundLight } from "../components/minor-components/credentials-pages/BackgoundLight";
import { CredentialsCard } from "../components/minor-components/credentials-pages/CredentialsCard";
import { InputField } from "../components/minor-components/fields/InputField";
import { restaurantLogin } from "../redux/Actions/RestaurantAction";
import { useEffect } from "react";

export const Login = () => {
    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    
    // const { token, restaurant } = useSelector((state) => state.ProfileReducer);
    
    const [credentials, setcredentials] = useState({
        email: "",
        password: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        dispatch(restaurantLogin(email, password, navigate, alert));
    }

    // useEffect(() => {
    //     console.log(token, 'tokenrestaurant')
    //     console.log(restaurant ,'tokenrestaurant')
    // }, [token, restaurant])


    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    return (
        <>
        {!loading ? (
            <BackGroundLight>
                <CredentialsCard>
                        <img className='w-36 mx-auto' src={logo} alt="logo" />
                        <h1 className="mb-8 text-md my-4 text-center text-2xl">SIGN IN</h1>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Email*"
                                type="email"
                                id="email"
                                value={credentials.email} 
                                onChange={onChange}
                                placeholder="mail@example.com"
                            />
                            <InputField
                                label="Password*"
                                type="password"
                                id="password"
                                value={credentials.password} 
                                onChange={onChange}
                                placeholder="Password"
                            />
                            <button
                                type="submit"
                                className="w-full text-center py-2 rounded bg-myBg hover:bg-green-dark focus:outline-none my-1"
                                disabled={credentials.email && credentials.password ? false : true}>
                                Login
                            </button>
                        </form>
                </CredentialsCard>
            </BackGroundLight>
        ) :(
            <Loader />
        )}
       
        </>
    )
}