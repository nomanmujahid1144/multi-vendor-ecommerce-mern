import { Category } from "../minor-components/category/Category"
import { Sales } from "../minor-components/sales/Sale"
import { HeroSection } from "./hero-section/HeroSection"
import { Product } from "./product/Product"
import { useParams } from "react-router-dom"
import { PopularRestaurant } from "./restaurants/Restaurants"
import { RegisterRestaurant } from "./restaurants/RegisterRestaurant"

export const Index = () => {
    return (
        <>
            <HeroSection />
            <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
                <RegisterRestaurant />
                {/* <Category />
                <PopularRestaurant />
                <Product /> */}
            </main>
            {/* <Sales /> */}
        </>
    )
}