import banner1 from '../../../../../assets/static-banners/banner1.png'
import banner2 from '../../../../../assets/static-banners/banner2.png'
import banner3 from '../../../../../assets/static-banners/banner3.png'
import { SlickSliderStaticBanners } from '../../../minor-components/slider/SlickSlider'
import { StaticDisplayCard } from './StaticDisplayCard'

export const StaticBannerDisplay = () => {

    const items = [
        banner1,
        banner2,
        banner3
    ]

    return (
        <div className="my-3">
            <SlickSliderStaticBanners>
                {items.map((banner, index) => (
                    <div className='px-2'>
                        <StaticDisplayCard>
                            <img
                                className="h-full w-full rounded-lg object-cover object-center group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out cursor-pointer"
                                src={banner}
                                alt="image"
                            />
                        </StaticDisplayCard>
                    </div>
                ))}
            </SlickSliderStaticBanners>
        </div>
    )
}