import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const HomeScreenHeader = () => {
    return (
        <div className="home-screen-header">
            <div className="home-screen-header-bg">
                <div className="home-screen-header-container">
                    <div className="home-screen-header-inner-divider">
                        <div className="home-screen-header-inner-first">
                            <p className="home-screen-header-inner-heading">Find Your Favourite Restaurant</p>
                            <p className="home-screen-header-inner-typo mt-2">For the love of delicious food.</p>
                            <div className="home-screen-header-inner-search-container mt-2">
                                <div className="home-screen-header-inner-search-inner">
                                    <form >
                                        <div className="home-screen-header-inner-search-inner-wrapper">
                                            <div className="home-screen-header-inner-search-icon-wrapper">
                                                {/* ICON Class home-screen-header-inner-search-icon */}
                                                <FontAwesomeIcon size="sm" className="home-screen-header-inner-search-icon" icon="fa-solid fa-magnifying-glass" />
                                            </div>
                                            <div className="home-screen-header-inner-search-input-wrapper">
                                                <input className="home-screen-header-inner-search-input" placeholder="Search foods and restaurants...." type="text" aria-label="search" value="" />
                                                <div className="home-screen-header-inner-search-input-icon">
                                                <FontAwesomeIcon size="sm" className="home-screen-header-inner-search-icon" icon="fa-solid fa-magnifying-glass" />
                                                {/* ICON Class home-screen-header-inner-search-icon */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}