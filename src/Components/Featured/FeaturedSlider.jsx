import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedToday from "./FeaturedToday.jsx"
import "../../Styles/Galleries/featuredSlider.css"
import PrevArrow from "../Arrows/PrevArrow.jsx";
import NextArrow from "../Arrows/NextArrow.jsx";

function FeaturedSlider(props) {
    const [featuredData, setFeaturedData] = React.useState(props.data)


    var settings = {
        className: "featured-slider",
        infinite: false,
        speed: 550,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        mobileFirst: true
    }

    if (window.innerWidth <= 600) {
        settings = {
            ...settings,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    return (
        <>
            <div>
                <span className="container-header"></span>
                <Slider {...settings}>
                    {featuredData.map((data, index) => {
                        return (<div key={index}><FeaturedToday featured={data} /></div>)
                    })}
                </Slider>
                <div className="featured-slider-bp1080">
                    {featuredData.map((data, index) => {
                        return (<div key={index}><FeaturedToday featured={data} /></div>)
                    })}
                </div>
            </div>

        </>
    )
}


export default FeaturedSlider