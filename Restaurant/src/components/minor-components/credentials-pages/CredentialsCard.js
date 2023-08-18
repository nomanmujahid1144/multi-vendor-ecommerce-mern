export const CredentialsCard = ({children}) => {
    return (
        // <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        //     <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        //         {children}
        //     </div>
        // </div>
        <div className="my-auto flex h-screen items-center w-full md:mx-0 md:px-0 lg:mb-10 justify-center md:justify-center lg:justify-end xl:justify-end">
            <div className="mt-[2vh] w-full max-w-full md:pl-4 lg:pr-0  xl:pr-20  lg:max-w-[420px]  xl:max-w-[500px] lg:pl-0">
            {children}
            </div>
        </div>
    )
}