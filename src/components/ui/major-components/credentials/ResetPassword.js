import InputField from "../../minor-components/fields/InputField";
import { AuthCard } from "./AuthCard";
import { Background } from "./Background";
import { TopImage } from "./TopImage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../../redux/Actions/UserActions";
import { useAlert } from "react-alert";
import { SubmitButton } from "../../minor-components/button/SubmitButton";


export const ResetPassword = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const alert = useAlert();
  
    const [credentials, setcredentials] = useState({
      email: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        const { email } = credentials;
        
      dispatch(resetPassword(email, navigate, alert));
    };
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  

    return (
        <Background >
            <AuthCard>
                <TopImage heading="Reset Your Password" />
                <form className="text-start" onSubmit={handleSubmit}>
                    <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
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
                        <SubmitButton
                            innerText='Send'
                        />
                        <div className="text-center">
                            <span className="text-slate-400 me-2">Remember your password ?</span>{" "}
                            <Link to={'/login'} className="text-black dark:text-white font-bold inline-block">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </form>
            </AuthCard>
       </Background>
    )
}