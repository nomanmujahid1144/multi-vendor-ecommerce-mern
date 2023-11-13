export const AuthCard = ({children}) => {
    return (
        <div className="flex justify-center w-full relative">
            {/* <div className=""> */}
                <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                    {children}
                </div>
            {/* </div> */}
        </div>
    )
}