import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.css'


const NextArrow = (props) => {
    const { className, style, onClick, top, display } = props;

    return (

        <div
            className={className}
            style={{ ...style, display: display, top: top ,opacity: "0.9" , padding: "20px"  ,borderRadius: '50%'   }}
            onClick={onClick}
        />

    );
}

const PrevArrow = (props) => {
    const { className, style, onClick, top, display } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: display, zIndex : "1" , top: top ,opacity: "0.9" , padding: "20px"  ,borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}


var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="100px" display="block"/>,
    prevArrow: <PrevArrow top="100px" display="block"/>,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var settingsCategories = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="100px" display="block"/>,
    prevArrow: <PrevArrow top="100px" display="block"/>,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var settingsStaticBanners = {
    centerMode: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="100px" display="none"/>,
    prevArrow: <PrevArrow top="100px" display="none" />,
    appendDots: dots => (
        <div
          style={{
                padding: "20px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};



export const SlickSlider = ({ children }) => {
    return (
    
            <Slider className='w-full' {...settings}>
                    {children}
            </Slider>
      
    )
}
export const SlickSliderCategories = ({ children }) => {
    return (
    
            <Slider className='w-full' {...settingsCategories}>
                    {children}
            </Slider>
      
    )
}
export const SlickSliderStaticBanners = ({ children }) => {
    return (
    
            <Slider className='w-full' {...settingsStaticBanners}>
                    {children}
            </Slider>
      
    )
}