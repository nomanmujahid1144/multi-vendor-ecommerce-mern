import banner1 from '../../../../../assets/static-banners/user.png'
import curved1 from '../../../../../assets/static-banners/pre.svg'
import curved2 from '../../../../../assets/static-banners/post.svg'
import banner2 from '../../../../../assets/static-banners/deliverlyMan.png'
import banner3 from '../../../../../assets/static-banners/reached.png'
import { SlickSliderStaticBanners } from '../../../minor-components/slider/SlickSlider';

export const DisplayFlowInImages = () => {

    const items = [
        {
            banner: banner1,
            heading: 'Order Online',
            curved: curved1
        },
        {
            banner: banner2,
            heading: 'Fast Delivery',
            curved: curved2
        },
        {
            banner: banner3,
            heading: 'Enjoy your meal',
            curved: ''
        }
    ]

    return (
        <div className="my-3">
            <SlickSliderStaticBanners>
                {items.map((banner, index) => (
                    <div className='w-full px-2 inline-block relative'>
                        <div className='flex flex-col flex-wrap items-center justify-center'>
                            <div className='static-display-flow-image-container'>
                                <img className='w-full h-full object-contain' src={banner.banner} />
                            </div>
                            <p class="MuiTypography-root MuiTypography-body1 mui-style-1sv20l3">{banner.heading}</p>
                            <p class="MuiTypography-root MuiTypography-body1 mui-style-u7tpyb">Order in for yourself or for the group, with no restrictions on order value</p>
                        </div>
                        <div className='curved-line-static-flow-image'>
                            <div>
                                <img src={banner.curved} />
                            </div>
                        </div>
                    </div>
                ))}
            </SlickSliderStaticBanners>
        </div>
    )
}