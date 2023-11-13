import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseURL } from "../../../../constants/baseURL";
import ReactStars from "react-rating-stars-component";

export const SingleRestaurantHeader = (props) => {
    const { restaurant } = props;
    return (
        <div className="shop-header-container">
            <div className="shop-header-inner-container-first">
                <div className="shop-header-inner-container-first-inner">
                    <div className="shop-header-inner-container-first-inner-divider">
                        <div className="shop-header-inner-container-first-inner-divider-first">
                            <img src={baseURL + restaurant.restaurantLogo} />
                        </div>
                        <div className="shop-header-inner-container-first-inner-divider-second">
                            <div className="shop-header-inner-container-first-inner-divider-second-div">
                                <div className="shop-header-inner-logo">
                                    <div className="shop-header-inner-fav">
                                        <div className="shop-header-inner-fav-btn">
                                            <FontAwesomeIcon className="icons-style" size="sm" icon="fa-solid fa-heart" />
                                        </div>
                                    </div>
                                    <div className="shop-header-inner-logo-div">
                                        <div className="shop-header-inner-logo-div-typo">
                                            <h5 className="shop-header-inner-logo-div-typo-head"></h5>
                                        </div>
                                        <div className="shop-header-inner-logo-img">
                                            <img loading="lazy" src={baseURL + restaurant.restaurantLogo} />
                                        </div>
                                    </div>
                                    <div className="shop-header-inner-shop-info-container">
                                        <p className="shop-header-inner-shop-name">{restaurant.restaurantName}</p>
                                        <div className="shop-header-inner-shop-rating-container">
                                            <div className="shop-header-inner-shop-rating-div">
                                                <span className="shop-header-inner-shop-rating-stars">
                                                    <ReactStars
                                                        count={5}
                                                        value={3.5}
                                                        edit={false}
                                                        size={30}
                                                        isHalf={true}
                                                        a11y={true}
                                                        emptyIcon={<i className="far fa-star"></i>}
                                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                        fullIcon={<i className="fa fa-star"></i>}
                                                        activeColor="#fff"
                                                    />
                                                </span>
                                                <p className="shop-header-inner-shop-rating-points px-2">3.5</p>
                                            </div>
                                            <p className="shop-header-inner-shop-rating-review mr-2">Reviews</p>
                                        </div>
                                        <div className="shop-header-inner-shop-address">
                                            {restaurant.formattedAddress}
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-header-inner-other-info-container">
                                    {/* <div className="shop-header-inner-other-info-each">
                                        <p className="shop-header-inner-other-info-head">0%</p>
                                        <p className="shop-header-inner-other-info-typ">Positive Reviews</p>
                                    </div>
                                    <div className="shop-header-inner-other-info-each">
                                        <p className="shop-header-inner-other-info-head">$0</p>
                                        <p className="shop-header-inner-other-info-typ">Minimum Order</p>
                                    </div> */}
                                    <div className="shop-header-inner-other-info-each">
                                        <p className="shop-header-inner-other-info-head">{restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}-{restaurant.timeStamp}</p>
                                        <p className="shop-header-inner-other-info-typ">Delivery Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-header-inner-container-second">
                <div className="shop-header-inner-container-second-inner">
                    <div className="shop-header-inner-container-second-inner-img">
                        <img loading="lazy" src={baseURL + restaurant.restaurantCoverImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}