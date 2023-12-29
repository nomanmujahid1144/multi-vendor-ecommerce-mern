import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../../../../assets/6.jpg'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductById } from "../../../../redux/Actions/ProductsAction";
import { baseURL } from "../../../../constants/baseURL";

export const SingleProductDetailsInModel = ({ productId, restaurantId }) => {
    
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const { singleProduct } = useSelector(
        (state) => state.productReducer
    );

    useEffect(() => {
        dispatch(getSingleProductById(productId));
    }, [])

    useEffect(() => {
        if (singleProduct) {
            setProduct(singleProduct)
        }
    }, [singleProduct])

    return (
        <div className='product-inner'>
            <div className="product-image-wrapper">
                <div className="product-image-inner">
                    <div className="product-image-container">
                        <div className="product-image" >
                            <img loading="lazy" className="object-cover" src={baseURL + product.productPhoto} />
                        </div>
                    </div>
                    <div className="product-delivery-time-wrapper">
                        <p className='product-delivery-time'>30-40-min</p>
                    </div>
                </div>
            </div>
            <div className="product-info-wrapper">
                <div className="product-name-info-container">
                    <h5 className="product-name !font-extrabold ">{product.name}</h5>
                </div>
                <div className="py-4 overflow-hidden overflow-y-auto overflow-x-hidden h-40">
                    <p>
                        {isExpanded ? (
                        <React.Fragment>
                            {product?.description}
                            <a href="#" className="font-bold text-primaryColor" onClick={() => setIsExpanded(false)}>Show less</a>
                        </React.Fragment>
                        ) : product?.description?.length > 250 ? (
                        <React.Fragment>
                            {product?.description?.substring(0, 250)}...
                            <a href="#" className="font-bold text-primaryColor" onClick={() => setIsExpanded(true)}>Read more</a>
                        </React.Fragment>
                        ) : (
                        product?.description
                        )}
                    </p>
                </div>
                <div className='extras-space'></div>
                <div className='product-price-container'>
                    <div className="product-price-wrapper">
                        <p className="product-price ">
                        ${product.price}
                        {/* <span className="product-price-txt">$200</span> */}
                        </p>
                    </div>
                    <div className='product-cart' >
                        <FontAwesomeIcon className="icons-style" size='sm' icon="fa-solid fa-cart-shopping" />
                    </div>
                </div>
            </div>
        </div>
    )
}