import { useDispatch, useSelector } from "react-redux"
import { GeneralCard } from "../../minor-components/card/GeneralCard"
import { SectionHeading } from "../../minor-components/headings/SectionHeading"
import { getCategories } from "../../../../redux/Actions/CategoryActions";
import { useContext, useEffect, useState } from "react";
import { SingleCategoryCard } from "../../minor-components/category/SingleCategoryCard";
import { SearchContext } from "../../../../Context/SearchContext";
import { SomethingNotFound } from "../../minor-components/extras/SomethingNotFound";

export const AllCategories = () => {

    const dispatch = useDispatch();
    const { searchQuery } = useContext(SearchContext);
    const [allcategories, setAllCategories] = useState([]);

    const { categories } = useSelector(
        (state) => state.categoryReducer
    );

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    useEffect(() => {
        // if(discountedProducts.length > 0){}
        const filteredSategories = categories.filter((category) => {
            // Convert searchQuery and product name to lowercase for case-insensitive comparison
            const searchTerm = searchQuery.toLowerCase();
            const categoryName = category.brand.toLowerCase();
            return categoryName.includes(searchTerm);
        });
        // Use the filteredProducts array to display the filtered results
        setAllCategories(filteredSategories)
    }, [categories, searchQuery]);


    return (
        <GeneralCard>
            <SectionHeading
                heading="Categories"
                isAddlink={false}
                isSearchlink={true}
                link="/categories"
            />
            {allcategories.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-6">
                    {allcategories?.map((category) => (
                        <SingleCategoryCard category={category}/>
                    ))}
                </div>
            :
                <SomethingNotFound
                    message="No Category Found"
                />
            }
        </GeneralCard>
    )
}