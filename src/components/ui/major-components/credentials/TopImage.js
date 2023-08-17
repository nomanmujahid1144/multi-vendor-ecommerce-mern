import { Link } from "react-router-dom";
import logo from '../../../../assets/logo/logo.png';

export const TopImage = ({heading}) => {
    return (
        <>
            <Link to={'/'}>
                <img src={logo} className="mx-auto h-10" alt="" />
            </Link>
            <h5 class="my-6 text-xl font-semibold">{heading}</h5>
        </>
    )
}