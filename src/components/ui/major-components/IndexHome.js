import { HomeScreenHeader } from "./restaurants/HomeScreenHeader";
import {HomeFilters} from "../minor-components/filter/HomeFilter";

export const IndexHome = () => {

    return (
        <>
            <HomeScreenHeader />
            {/* <div className="MuiContainer-root MuiContainer-maxWidthLg mui-style-159cdno"> */}
            <div className="px-10">
                <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
                    {/* {restaurantsByUserLocation.length > 0 ?
                        (<>
                            <SectionHeading
                                heading="Restaurants"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
                                {restaurantsByUserLocation?.map((restaurant) => (
                                    <PopularRestaurant
                                        goToSingleRestaurant={`/restaurant/${restaurant._id}`}
                                        restaurantName={restaurant.restaurantName}
                                        restaurantCoverImage={baseURL + restaurant.restaurantCoverImage}
                                        restaurantMinDeliveryTime={restaurant.minDeliveryTime}
                                        restaurantMaxDeliveryTime={restaurant.maxDeliveryTime}
                                        restaurantTimeStamp={restaurant.timeStamp}
                                    />
                                ))}
                            </div> */}
                            <HomeFilters />
                        {/* </>)
                        : 
                        <SectionHeading
                            heading="No Restaurant Yet!"
                        />
                    } */}
                </main>
            </div>
        </>
    )
}