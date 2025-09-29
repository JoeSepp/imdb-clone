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
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <>
            <span className="container-header">
                {props.header} {props.header && <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>}
            </span>
            <Slider {...settings}>
                {featuredData.map((data, index) => {
                    return (<div key={index}><FeaturedToday featured={data} /></div>)
                })}
            </Slider>
        </>
    )
}


export default FeaturedSlider