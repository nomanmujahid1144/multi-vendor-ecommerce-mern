import authImg from '../../../assets/auth-bg.jpg'
export const BackGroundLight = ({ children }) => {
    return (
        // <div className="bg-grey-lighter min-h-screen flex flex-col">
        //     {children}
        // </div>
        <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
            <main className={`mx-auto min-h-screen`}>
            <div className="relative flex">
                <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[100%] lg:max-w-full xl:h-screen xl:max-w-full lg:px-8 xl:pt-0 xl:pl-[70px]">
                    <div className="mb-auto flex flex-col md:pr-0 md:pl-0 md:max-w-full lg:pl-0 lg:max-w-full">
                        {children}
                        <div className="absolute left-0 hidden h-full min-h-screen md:hidden xl:block lg:w-[42vw] xl:w-[50vw]">
                            <div
                                className="absolute flex h-full w-full items-end justify-center bg-cover bg-center md:rounded-br-[120px] xl:rounded-br-[200px]"
                                style={{ backgroundImage: `url(${authImg})` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}