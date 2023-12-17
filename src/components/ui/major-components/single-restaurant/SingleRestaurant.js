import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsByRestaurantId } from '../../../../redux/Actions/RestaurantAction';
import { Category } from '../../minor-components/category/Category';
import { SectionHeading } from '../../minor-components/headings/SectionHeading'
import { useState } from 'react';
import { SingleRestaurantHeader } from './SingleRestaurantHeader'
import { SingleProduct } from '../product/SingleProduct'
import { baseURL } from '../../../../constants/baseURL';
import { addToCart } from '../../../../redux/Actions/CartAction';
import { useAlert } from 'react-alert';

export const SingleRestaurant = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});

  const { restaurantById } = useSelector(
    (state) => state.restaurantReducer
  );


  useEffect(() => {
    if (Object.keys(params).length > 0) {
      dispatch(getRestaurantsByRestaurantId(params.restaurantId))
    }
  }, [params])

  
  useEffect(() => {
    if (Object.keys(restaurantById).length > 0) {
      setRestaurant(restaurantById);
    }
  }, [restaurantById])


  const handleCart = (productId, restaurantId) => {
    // const product = restaurant.products.find((product) => product._id === id);
    const details = {
      productId: productId,
      restaurantId: restaurantId
    }
    dispatch(addToCart(details, alert));
  }

  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg mui-style-159cdno">
      <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
        <SingleRestaurantHeader
          restaurant={restaurant}
        />    
          <SectionHeading
            heading="Categories"
          />
          <Category
            Categories={restaurant.categories}
          />
          <SectionHeading
            heading="Products"
          />
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {restaurant?.products?.map((product) => (
            <SingleProduct
              productId={product._id}
              productName={product.name}
              productPrice={product.price}
              productPhoto={baseURL + product.productPhoto}
              getId={handleCart}
            />
          ))}
          </div>
      </main>
    </div>
  )
}