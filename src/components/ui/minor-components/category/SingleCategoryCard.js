import { Link } from "react-router-dom"
import { baseURL } from "../../../../constants/baseURL"

export const SingleCategoryCard = ({category}) => {
    return (
        <div className='p-2'>
            <div className="card cursor-pointer">
                <Link to={`/category/${category._id}`} >
                    <div className="flex flex-col items-center rounded-lg p-2 hover:text-primary hover:bg-primary/10  dark:bg-secondary-light/10 hover:text-secondary-light">
                        <span className='w-full h-20'>
                            <img
                                className="w-full h-full object-contain"
                                src={baseURL + category?.categoryPhoto}
                                alt="image"
                                />
                        </span>    
                        <h3 className="pt-3 font-medium tracking-wide line-clamp-1">
                            {category?.brand}
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}