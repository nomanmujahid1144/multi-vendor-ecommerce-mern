import { Link } from "react-router-dom"
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../constants/axiosInstance";
import logo from '../assets/logo2.png'
import { authentication } from "../firebase-config";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { RecaptchaVerifier , signInWithPhoneNumber } from 'firebase/auth';
import { BackGroundLight } from "../components/minor-components/credentials-pages/BackgoundLight";
import { CredentialsCard } from "../components/minor-components/credentials-pages/CredentialsCard";
import { InputField } from "../components/minor-components/fields/InputField";


export const Signup = () => {

    const [credentials, setcredentials] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: ""
      });
      let navigate = useNavigate();
      const [value, setValue] = useState()
      // let alert = useAlert();
      const generateRecapture = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
    
          }
        }, authentication);
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName , lastName ,email, password  } = credentials;
        const res = await axiosInstance.post('/api/v1/admin/signup', {firstName , lastName ,email, password })
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          generateRecapture();
          let appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(authentication , value , appVerifier)
          .then(conformatoinResult => {
           window.conformatoinResult = conformatoinResult;
           setTimeout(function(){
             console.log(value)
             navigate("/verification" , {state : {phoneNumber : value}});
         }, 4000);
          }).catch((error) => {
           console.log(error);
          })
          // alert.show('Logged in successfully')
        }else{
          // alert.show('Invalid')
        }
      };
    
      const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    return (
      <BackGroundLight>
        <CredentialsCard>       
          <img className='w-36 mx-auto' src={logo} alt="logo" />
          <h1 className="mb-8 text-md my-4 text-center text-2xl">SIGN UP</h1>
          <form onSubmit={handleSubmit}>
              <InputField
                  label="Full Name*"
                  type="text"
                  id="firstName"
                  value={credentials.firstName} 
                  onChange={onChange}
                  placeholder="First Name"
              />
              <InputField
                  label="Last Name*"
                  type="text"
                  id="lastName"
                  value={credentials.lastName} 
                  onChange={onChange}
                  placeholder="Last Name"
            />
            <InputField
                label="Email*"
                type="email"
                id="email"
                value={credentials.email} 
                onChange={onChange}
                placeholder="mail@example.com"
            />
            <PhoneInput
                className="border  border-gray-300 text-gray-900 text-sm rounded dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                international 
                initialValueFormat="international"
                countryCallingCodeEditable={false} 
                defaultCountry="ZA"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
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
            >Sign Up</button>

            <div className="text-left text-sm text-grey-dark mt-4 my-4">
                Already have an account? <span className="text-blue-600"><Link to='/login'>Sign In</Link></span>
            </div>       
          </form>
          <div id="recaptcha-container"></div>
          </CredentialsCard>
        </BackGroundLight> 
    )
}