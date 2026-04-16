import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsData from "../../../Data/newsData.js"
import HeroContent from "../HeroContent.jsx";
import "../../../Styles/Sliders/MainSlider.css"
import NextArrow from "../../Arrows/NextArrow.jsx"
import PrevArrow from "../../Arrows/PrevArrow.jsx"

function MainSlider({slider, setSlider}) {

    var settings = {
        draggable: false,
        autoplay: false,
        autoplaySpeed: 5000,
        className: "hero-content-slider",
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <Slider {...settings}>
            {slider.map((slide) => {
                return (
                    <div>
                        <HeroContent data={slide} />
                    </div>
                )
            })}

        </Slider>
    )
}

export default MainSlider