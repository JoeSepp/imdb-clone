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
        <div>
            <div className="hero-section" style={{ gridArea: "hero-area" }}>
                <div style={{ maxWidth: "100%", position: "relative" }}>
                    <Slider asNavFor={nav2}
                        ref={slider => (sliderRef1 = slider)}
                        className="hero-content-slider"
                        autoplay={true}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                        autoplaySpeed={5000}
                        speed={500}
                        draggable={false}
                    >
                        {mainSlider.map((slide) => {
                            return (
                                <HeroContent data={slide} />
                            )
                        })}
                    </Slider>
                </div>

                <div className="hero-label-list_next" style={{ gridArea: "side-hero-area" }}>
                    <div className="flex-container-up-next">
                        <div className="up-next_label-header">
                            <span className="up-next_label-text">Up next</span>
                        </div>
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
                    </div>
                    <span className="browse-trailer_text">Browse trailers &gt;</span>
                </div>


            </div >
            <div className="page-grid-divider" style={{ gridArea: "bottom-border-area" }}>
                <div className="grid-bottom-border" ></div>
            </div>
        </div>
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