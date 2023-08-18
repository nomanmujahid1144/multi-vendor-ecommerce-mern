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

export const Login = () => {
    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );
    // const [email , setEmail] = useState('')
    // const [password , setPassword] = useState('')
    
    const [credentials, setcredentials] = useState({
        email: "",
        password: ""
      });

    const sendCreds=async()=>{
        dispatch(selectProgressBarState(true))
        // const res = await axiosInstance.post('/api/v1/admin/login', {
            
        //      email,password 
            
        //     })

        const { email, password } = credentials;
        const res = await axiosInstance.post('/api/v1/admin/login', {email , password })
        console.log(res.data + "  Res data" )
        if (res.data.success ) {
            dispatch(selectProgressBarState(false))
            dispatch(adminLogin(res.data.token))
            localStorage.setItem('token' , res.data.token)
            console.log(localStorage + " Locals Data")
            navigate('/')
            alert.show('Logged in successfully')

        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show(res.data.message)
        }
    }

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
                        <form onSubmit={sendCreds}>
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
                        <div className="text-left text-sm text-grey-dark mt-4 my-4">
                            Do not  have an account? <span className="text-blue-600"><Link to='/signup'>Sign Up</Link></span>
                        </div>
                </CredentialsCard>
            </BackGroundLight>
        ) :(
            <Loader />
        )}
       
        </>
    )
}