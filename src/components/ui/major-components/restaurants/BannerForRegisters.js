import restaurantImage6 from '../../../../assets/blog/join.f51ba9a8.png';
import restaurantPeople from '../../../../assets/blog/restaurant-people.png';
import deliveryBoy from '../../../../assets/blog/delivery-boy.png';

export const BannerForRegisters = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="card cursor-pointer" style={{boxShadow: 'rgba(100, 116, 139, 0.06) 0px 1px 1px, rgba(100, 116, 139, 0.1) 0px 1px 2px', background : `url(${restaurantImage6}) center center / cover no-repeat, rgba(255, 121, 24, 0.07)`}}>
                    <div className="flex flex-col">
                        <div className="space-y-1.5 h-full rounded-lg py-4 px-6">
                            <div className="flex flex-row justify-between items-center h-full ">
                                <div className="inline-flex bg-transparent w-full h-[150px] max-w-[150px] relative cursor-pointer">
                                    <img src={restaurantPeople} className='w-full h-full object-contain'  />
                                </div>
                                <div className="flex items-start flex-col mt-0 mr-0 mb-0 ml-[16px]">
                                    <h3 className='text-lg leading-[1.5] font-semibold m-0'>Open Your Own Restaurant</h3>
                                    <p className='text-base leading-[1.5] font-normal m-0 text-[#4B5864]'>Register as seller and open shop to start your business</p>
                                </div>
                                <button className="flex items-center justify-center mt-0 mr-0 mb-0 ml-[16px] relative box-border tap-transparent outline-none border-0 m-0 cursor-pointer select-none align-middle appearance-none font-semibold font-rubik text-sm leading-7 min-w-16 transition duration-250 ease-in bg-orange-500 hover:bg-orange-600 border-orange-500 text-white rounded-full py-2 px-4">
                                    <span className='inline-flex'>Register</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card cursor-pointer" style={{boxShadow: 'rgba(100, 116, 139, 0.06) 0px 1px 1px, rgba(100, 116, 139, 0.1) 0px 1px 2px', background : `url(${restaurantImage6}) center center / cover no-repeat, rgba(255, 121, 24, 0.07)`}}>
                    <div className="flex flex-col">
                        <div className="space-y-1.5 h-full rounded-lg py-4 px-6">
                            <div className="flex flex-row justify-between items-center h-full ">
                                <div className="inline-flex bg-transparent w-full h-[150px] max-w-[150px] relative cursor-pointer">
                                    <img src={deliveryBoy} className='w-full h-full object-contain'  />
                                </div>
                                <div className="flex items-start flex-col mt-0 mr-0 mb-0 ml-[16px]">
                                    <h3 className='text-lg leading-[1.5] font-semibold m-0'>Become a Delivery Boy</h3>
                                    <p className='text-base leading-[1.5] font-normal m-0 text-[#4B5864]'>Become a Delivery Boy</p>
                                </div>
                                <button className="flex items-center justify-center mt-0 mr-0 mb-0 ml-[16px] relative box-border tap-transparent outline-none border-0 m-0 cursor-pointer select-none align-middle appearance-none font-semibold font-rubik text-sm leading-7 min-w-16 transition duration-250 ease-in bg-orange-500 hover:bg-orange-600 border-orange-500 text-white rounded-full py-2 px-4">
                                    <span className='inline-flex'>Register</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}