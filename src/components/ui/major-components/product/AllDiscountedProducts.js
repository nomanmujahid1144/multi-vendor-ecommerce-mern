import { useDispatch, useSelector } from "react-redux"
import { GeneralCard } from "../../minor-components/card/GeneralCard"
import { SectionHeading } from "../../minor-components/headings/SectionHeading"
import { useContext, useEffect, useState } from "react";
import { getDiscountedProducts } from "../../../../redux/Actions/ProductsAction";
import { useAlert } from 'react-alert';
import { SingleProduct } from "./SingleProduct";
import { baseURL } from "../../../../constants/baseURL";
import { addToCart } from "../../../../redux/Actions/CartAction";
import { SearchContext } from "../../../../Context/SearchContext";
import { SomethingNotFound } from "../../minor-components/extras/SomethingNotFound";

export const AllDiscountedProducts = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { searchQuery } = useContext(SearchContext);
    const [products, setProducts] = useState([])

    const { discountedProducts } = useSelector(
        (state) => state.productReducer
    )

    useEffect(() => {
        dispatch(getDiscountedProducts(alert))
    }, [])
    

    useEffect(() => {
        // if(discountedProducts.length > 0){}
        const filteredProducts = discountedProducts.filter((product) => {
            // Convert searchQuery and product name to lowercase for case-insensitive comparison
            const searchTerm = searchQuery.toLowerCase();
            const productName = product.name.toLowerCase();
            return productName.includes(searchTerm);
        });
        // Use the filteredProducts array to display the filtered results
        setProducts(filteredProducts)
    }, [discountedProducts, searchQuery]);


    const handleCart = (productId, restaurantId) => {
        // const product = restaurant.products.find((product) => product._id === id);
        const details = {
          productId: productId,
          restaurantId: restaurantId
        }
        dispatch(addToCart(details, alert));
      }

    return (
        <GeneralCard>
            <SectionHeading
                heading="Products Under $40"
                isAddlink={false}
                isSearchlink={true}
            />
            {products.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <div key={index} className='p-4'>
                            <SingleProduct
                                productId={product._id}
                                restaurantId={product.restaurantId}
                                productName={product.name}
                                productPrice={product.price}
                                productPhoto={baseURL + product.productPhoto}
                                getId={handleCart}
                            />
                        </div>
                    ))}
                </div>
                :
                <SomethingNotFound
                    message="No Product Found"
                /> 
            }
        </GeneralCard>
    )
}