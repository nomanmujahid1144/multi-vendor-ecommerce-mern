import { Link } from 'react-router-dom'
import restaurantImage6 from '../../../../assets/blog/6.jpg'
import { Modal } from '../../minor-components/model/Model'

export const PopularRestaurant = (props) => {

    const {
        goToSingleRestaurant,
        restaurantName,
        restaurantCoverImage,
        restaurantMinDeliveryTime,
        restaurantMaxDeliveryTime,
        restaurantTimeStamp
    } = props

    return (
        <>
            <div className="card">
                <img
                    className="h-48 w-full rounded-lg object-cover object-center group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out cursor-pointer"
                    src={restaurantCoverImage}
                    alt="image"
                />
                <div className="absolute inset-0 flex h-full w-full flex-col justify-end group-hover:scale-110 duration-500 ease-in-out cursor-pointer">
                    <div className="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12">
                        <div className="line-clamp-2">
                            <Link to={goToSingleRestaurant} className='text-base font-medium text-white'>
                                {restaurantName}
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-slate-200">
                                <p className="shrink-0 text-tiny+">{restaurantMinDeliveryTime} - {restaurantMaxDeliveryTime} Delivery Time</p>
                        </div>
                        <div className="-mr-1.5 flex">
                            <button className="btn h-7 w-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4.5 w-4.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            </button>
                            <button className="btn h-7 w-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4.5 w-4.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}