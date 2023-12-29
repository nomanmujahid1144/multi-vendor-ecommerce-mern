import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { SearchContext } from "../../../../Context/SearchContext";

export const SearchFilter = ({ searchInputPlaceHolder }) => {

    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative rounded-full  lg:w-1/2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
            </div>
            <input
                type="search"
                id="default-search"
                className="block rounded-full w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50"
                placeholder={searchInputPlaceHolder}
                value={searchQuery}
                onChange={(event) => handleSearch(event)}
            />
        </div>
    )
}