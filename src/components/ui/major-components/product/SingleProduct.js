import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SingleProduct = (props) => {

    const {
        productId,
        productName,
        productPrice,
        productPhoto,
        getId
    } = props;

    const handleCart = () => {
        getId(productId);
    }

    return (
        <div className='product-card'>
            <div className='product-inner'>
            <div className="product-image-wrapper">
                <div className="product-image-inner">
                <div className="product-fav-wrapper">
                    <div className="product-fav-btn">
                    {/* product-fav-icon */}
                    <FontAwesomeIcon className="icons-style" size="sm" icon="fa-solid fa-heart" />
                    </div>
                </div>
                <div className="product-ratting-wrapper">
                    <div className="product-ratting-bd">
                    {/*  */}
                    </div>
                </div>
                <div className="product-image-container">
                    <div className="product-image">
                    <img loading="lazy" src={productPhoto} />
                    </div>
                </div>
                <div className="product-delivery-time-wrapper">
                    <p className='product-delivery-time'>30-40-min</p>
                </div>
                </div>
            </div>
            <div className="product-info-wrapper">
                <div className="product-name-info-container">
                        <h5 className="product-name">{productName}</h5>
                </div>
                <div className='extras-space'></div>
                <div className='product-price-container'>
                <div className="product-price-wrapper">
                    <p className="product-price">
                    ${productPrice}
                    {/* <span className="product-price-txt">$200</span> */}
                    </p>
                </div>
                <div className='product-cart' onClick={handleCart}>
                    <FontAwesomeIcon className="icons-style" size='sm' icon="fa-solid fa-cart-shopping" />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}