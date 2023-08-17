import InputField from "../../minor-components/fields/InputField";
import { AuthCard } from "./AuthCard";
import { Background } from "./Background";
import { TopImage } from "./TopImage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginFun } from "../../../../redux/Actions/UserActions";
import { useAlert } from "react-alert";
import { SubmitButton } from "../../minor-components/button/SubmitButton";


export const SignIn = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const alert = useAlert();
  
    const [credentials, setcredentials] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = credentials;
      dispatch(userLoginFun(email, password, navigate, alert));
    };
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  

    return (
        <Background >
            <AuthCard>
                <TopImage heading="Login" />
                <form className="text-start" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <InputField
                            variant="auth"
                            extra="mb-4"
                            label="Email*"
                            placeholder="mail@example.com"
                            id="email"
                            type="email"
                            value={credentials.email}
                            onChange={onChange}
                        />
                        <InputField
                            variant="auth"
                            extra="mb-4"
                            label="Password*"
                            placeholder="Enter your password here..."
                            id="password"
                            type="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                        <div className="flex justify-end mb-4">
                            <p className="text-slate-400 mb-0">
                                <Link to={'/reset-password'} className="text-slate-400">
                                    Forgot password ?
                                </Link>
                            </p>
                        </div>
                        <SubmitButton
                            innerText='Login'
                        />
                        <div className="text-center">
                            <span className="text-slate-400 me-2">Don't have an account ?</span>{" "}
                            <Link to={'/register'} className="text-black dark:text-white font-bold inline-block">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </form>
            </AuthCard>
       </Background>
    )
}