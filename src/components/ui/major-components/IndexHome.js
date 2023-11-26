import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularRestaurant } from "./restaurants/Restaurants";
import { SectionHeading } from "../minor-components/headings/SectionHeading";
import { baseURL } from "../../../constants/baseURL";
import { HomeScreenHeader } from "./restaurants/HomeScreenHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getRestaurantsByUserLocation } from "../../../redux/Actions/RestaurantAction";
import { useAlert } from "react-alert";
import {HomeFilters} from "../minor-components/filter/HomeFilter";

export const IndexHome = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const alert = useAlert();
    // const location = useLocation();

    // const [locationFromIndexPage, setLocationFromIndexPage] = useState();

    // const { restaurantsByUserLocation } = useSelector(
    //     (state) => state.restaurantReducer
    // );

    // useEffect(() => {
    //     const Geomatery = localStorage.getItem('geomatery');
    //     if (Geomatery) {
    //         if (Object.keys(JSON.parse(Geomatery)).length) {
    //             setLocationFromIndexPage(JSON.parse(Geomatery))
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     if (locationFromIndexPage) {
    //         dispatch(getRestaurantsByUserLocation(locationFromIndexPage, navigate, alert))
    //     }
    // }, [locationFromIndexPage])

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