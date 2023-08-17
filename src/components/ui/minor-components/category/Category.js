import imagePng from '../../../../assets/category/music.jpg'
import sevenPng from '../../../../assets/category/7.jpg'
import eightPng from '../../../../assets/category/8.jpg'
import ninePng from '../../../../assets/category/9.jpg'
import tenPng from '../../../../assets/category/10.jpg'
import elevenPng from '../../../../assets/category/11.jpg'
import twelvePng from '../../../../assets/category/12.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from '../../../../redux/Actions/CategoryActions'
import { baseURL } from '../../../../constants/baseURL'
import { SectionHeading } from '../headings/SectionHeading'
import { SlickSlider } from '../slider/SlickSlider'

export const Category = () => {

  const dispatch = useDispatch();

  const { categories } = useSelector(
    (state) => state.categoryReducer
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [])

    return (
      <>
        <SectionHeading
            heading="Categories"
        />
        <SlickSlider>
          {categories.map((category, ind) => (
                <div className='px-3'>
                  <div className="card shrink-0 cursor-pointer">
                    <div className="flex flex-col items-center rounded-lg px-2 py-4 hover:text-primary hover:bg-primary/10  dark:bg-secondary-light/10 hover:text-secondary-light">
                      <img
                        className="w-24"
                        src={baseURL + category?.categoryPhoto}
                        alt="image"
                        />
                      <h3 className="pt-3 font-medium tracking-wide line-clamp-1">
                        {category?.brand}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </SlickSlider>
      </>
    )
}