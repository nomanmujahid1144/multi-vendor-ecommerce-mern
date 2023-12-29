import { Link } from "react-router-dom"
import { SearchFilter } from "../filter/SearchFilter"

export const SectionHeading = ({heading, link, isAddLink, isSearchlink}) => {
    return (
        <div className="flex mb-7 mt-5 items-center justify-between">
            <h3 className="text-xl leading-normal font-semibold">
                {heading}
            </h3>
            {isAddLink ? 
                <Link to={link}>
                    <span className="explore-span">
                        <p className="explore-span-paragraph">
                            Explore More
                        </p>
                    </span>
                </Link>
                : null}
            {isSearchlink ? 
                <SearchFilter
                    searchInputPlaceHolder="Find here"
                />
            : null}
        </div>
    )
}