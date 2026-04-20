import newsData from "../../Data/newsData.js"
import NewVideos from "./NewVideos.jsx"
import "../../Styles/Hero/Hero.css"
import { useState, useRef, useEffect } from "react"
import HeroContent from "./HeroContent.jsx";
import Slider from "react-slick"
import NextArrow from "../Arrows/NextArrow.jsx"
import PrevArrow from "../Arrows/PrevArrow.jsx"
import "../../Styles/Sliders/SideSlider.css"
import "../../Styles/Sliders/MainSlider.css"


function Hero(props) {
    const [mainSlider, setMainSlider] = useState(newsData)
    const [queue, setQueue] = useState(newsData)
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, [])


    return (
        <div className="hero-section">
            <Slider asNavFor={nav2}
                ref={slider => (sliderRef1 = slider)}
                className="hero-content-slider"
                autoplay={false}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                autoplaySpeed={5000}
                speed={500}
                draggable={false}
            >
                {mainSlider.map((slide) => {
                    return (
                        <div>
                            <HeroContent data={slide} />
                        </div>
                    )
                })}
            </Slider>

            <div className="hero-label-list_next">
                <span className="up-next_label-text">Up next</span>
                <div className="up-next-div-container">
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={3}
                        vertical={true}
                        className="side-hero-slider"
                        autoplay={false}
                        arrows={false}
                        draggable={false}
                    >
                        {queue.map((vid, keyid) => {
                            return <NewVideos video={vid} key={keyid} />
                        })}
                    </Slider>
                </div>
                <span className="browse-trailer_text">Browse trailers &gt;</span>
            </div>
        </div >
    )




    /*
       return (
           <div className="hero-section">
               <MainSlider slider={slider} setSlider={setSlider} />
               <SideSlider queue={queue} setQueue={setQueue} />
           </div>
       )
           */
}

export default Hero