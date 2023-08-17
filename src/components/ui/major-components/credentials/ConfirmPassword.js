import InputField from "../../minor-components/fields/InputField";
import { AuthCard } from "./AuthCard";
import { Background } from "./Background";
import { TopImage } from "./TopImage";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, verifyJWTToken } from "../../../../redux/Actions/UserActions";
import { useAlert } from "react-alert";
import { SubmitButton } from "../../minor-components/button/SubmitButton";


export const ConfirmPassword = () => {

    let navigate = useNavigate();
    let params = useParams();
    let dispatch = useDispatch();
    const alert = useAlert();
  
    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );


    const [credentials, setcredentials] = useState({
      password: "",
      cpassword: "",
    });

    useEffect(() => {
        const token = params.token;
        dispatch(verifyJWTToken(token, navigate, alert))
    }, []);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, cpassword } = credentials;
        if (password !== cpassword) {
            alert.show("Password does not Match")
        } else { 
            dispatch(updatePassword(password, global.userId, navigate, alert));
        }
    };
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  

    return (
        <Background >
            <AuthCard>
                <TopImage heading="Change Your Password" />
                <form className="text-start" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <InputField
                            variant="auth"
                            extra="mb-4"
                            label="Confirm Password*"
                            placeholder="Min. 8 characters"
                            id="password"
                            type="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                        <InputField
                            variant="auth"
                            extra="mb-4"
                            label="Confirm Password*"
                            placeholder="Min. 8 characters"
                            id="cpassword"
                            type="password"
                            value={credentials.cpassword}
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