import { baseURL } from '../../../../constants/baseURL'
import { SlickSliderCategories } from '../slider/SlickSlider'

export const Category = (props) => {

  const {Categories} = props

    return (
      <>
        <SlickSliderCategories>
          {Categories?.map((category, ind) => (
                <div className='p-2'>
                  <div className="card cursor-pointer">
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
                  </div>
                </div>
              ))}
          </SlickSliderCategories>
      </>
    )
}