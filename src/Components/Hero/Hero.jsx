import newsData from "../../Data/newsData.js"
import NewVideos from "./NewVideos.jsx"
import "../../Styles/Hero/Hero.css"
import { useState } from "react"
import MainSlider from "./Sliders/MainSlider.jsx"
import SideSlider from "./Sliders/SideSlider.jsx"


/* Udělat animaci pro slider jako je na stránkách pak asi pokračujem dál  */

function Hero(props) {
    const [slider, setSlider] = useState(newsData)
    const [queue, setQueue] = useState(newsData)

    return (
        <div className="hero-section">
            <MainSlider slider={slider} setSlider={setSlider} />
            <SideSlider queue={queue} setQueue={setQueue} />
        </div>
    )
}

export default Hero