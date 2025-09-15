import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import newsData from "../../../Data/newsData"
import NewVideos from "../NewVideos.jsx"
import "../../../Styles/Sliders/SideSlider.css"


function SideSlider({ queue, setQueue}) {



    const settings = {
        className: "side-hero-slider",
        infinite: true,
        initialSlide: 1,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        draggable: false
    };

    return (
        <div className="hero-label-list_next">
            <span className="up-next_label-text">Up next</span>
            <div className="up-next-div-container">
                <Slider {...settings}>
                    {queue.map((vid, keyid) => {
                        return <NewVideos video={vid} key={keyid} />
                    })}
                </Slider>
            </div>
            <span className="browse-trailer_text">Browse trailers &gt;</span>
        </div>
    )
}

export default SideSlider