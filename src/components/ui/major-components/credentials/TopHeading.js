import logo from "../../../../assets/logo/logo.png";

export const TopHeading = (props) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto -mt-10 rounded-lg"
                src={logo} alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {props.heading}
            </h2>
        </div>
    )
}