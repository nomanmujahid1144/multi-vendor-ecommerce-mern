import { SlickSliderCategories } from '../slider/SlickSlider'
import { SingleCategoryCard } from './SingleCategoryCard'

export const Category = (props) => {

  const {Categories} = props

    return (
      <>
        <SlickSliderCategories>
          {Categories?.map((category) => (
            <SingleCategoryCard category={category}/>
          ))}
        </SlickSliderCategories>
      </>
    )
}