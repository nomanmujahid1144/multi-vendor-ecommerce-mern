import { HomeScreenHeader } from "./restaurants/HomeScreenHeader";
import {HomeFilters} from "../minor-components/filter/HomeFilter";
// import { SearchProvider } from "../../../Context/SearchContext";

export const IndexHome = () => {

    return (
        <>
            <HomeScreenHeader />
            <div className="px-10">
                <main className="pos-app w-full pb-6 transition-all duration-[.25s]" >
                        <HomeFilters />
                </main>
            </div>
        </>
    )
}