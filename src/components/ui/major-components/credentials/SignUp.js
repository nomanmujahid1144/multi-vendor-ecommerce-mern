import InputField from "../../minor-components/fields/InputField";
import { AuthCard } from "./AuthCard";
import { Background } from "./Background";
import { TopImage } from "./TopImage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../../../redux/Actions/UserActions";
import { useAlert } from "react-alert";
import { SubmitButton } from "../../minor-components/button/SubmitButton";


export const SignUp = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const alert = useAlert();
  
    const [credentials, setcredentials] = useState({
        fullName: "",
        email: "",
        password: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { fullName, email, password } = credentials;
      dispatch(userSignUp(fullName, email, password, navigate, alert));
    };
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  

    return (
        <Background >
            <AuthCard>
                <TopImage heading="Signup" />
                <form className="text-start" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <InputField
                            variant="auth"
                            extra="mb-4"
                            label="Your Name:*"
                            placeholder="John Cena"
                            id="fullName"
                            type="text"
                            value={credentials.fullName}
                            onChange={onChange}
                        />
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
                        <SubmitButton
                            innerText='Register'
                        />
                        <div className="text-center">
                            <span className="text-slate-400 me-2">Already have an account ?</span>{" "}
                            <Link to={'/login'} className="text-black dark:text-white font-bold inline-block">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </AuthCard>
       </Background>
    )
}