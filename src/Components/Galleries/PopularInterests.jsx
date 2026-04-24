import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Arrows/NextArrow.jsx";
import PrevArrow from "../Arrows/PrevArrow.jsx";
import CategoryCard from "../Cards/CategoryCard.jsx";
import categoryData from "../../Data/categoryData.js"


function PopularInterests() {
    const [category, setCategory] = useState(categoryData)

    var settings = {
        className: "category-slick",
        speed: 500,
        lazyLoad: true,
        infinite: false,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    }

    if (window.innerWidth <= 600) {
        settings = {
            ...settings,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }


    return (
        <div className="movie-gallery-container">
            <span className="container-header" style={{padding:0, margin:0}}>
                <h3>
                    Popular interests
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
                </h3>
            </span>
            
            <div className="movie-slider-container">
                <Slider {...settings}>
                    {category.map((cat, index) => {
                        return <div className="test" key={index}><CategoryCard image={cat.image} header={cat.heading} /></div>
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default PopularInterests