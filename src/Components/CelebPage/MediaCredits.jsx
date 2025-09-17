import { Link } from "react-router-dom";
import "../../Styles/Movie/MediaCredits.css"
import MediaHoverComponent from "./MediaHoverComponent";
import { useState } from "react"


function MediaCredits({ creditsList, type, years }) {

    const [isHovered, setIsHovered] = useState(false)

    function getRatingColor(count) {
        let color;

        if (Math.round(count * 10) > 70) {
            color = "#00ff37"
        } else if (Math.round(count * 10) > 50) {
            color = "#fffb00ff"
        } else if (Math.round(count * 10) > 30) {
            color = "#ffa600ff"
        } else {
            color = "#7d0101"
        }
        return `conic-gradient(${color})`
    }

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    function handleMouseOver(e) {
        if (!isHovered) {
            document.querySelector(`.div-${e.target.dataset.listid}`).classList.add("display")
            setIsHovered(true)
        }
    }


    console.log(creditsList)

    if (type === "movie") {

        return (
            <section className="media-credits">
                <h2>Movies</h2>
                {years.map((year, index) => {
                    if (year === '') {
                        return
                    }
                    return (
                        <div key={index}>
                            <h3>{year}</h3>
                            <ul >
                                {creditsList.map((show, index) => {
                                    if (show.release_date.slice(0, 4) === year) {
                                        if (show.release_date === '') {
                                            return
                                        }

                                        return (
                                            <Link key={index} to={`/${type}/${show.id}`} className="movie-link-router">
                                                <li className="movie-ul-list-media" style={{ listStyleImage: getRatingColor(show.vote_average) }}>
                                                    <span  data-listid={show.id} onMouseEnter={handleMouseOver}>       
                                                        {show.original_title}
                                                        ({show.release_date.slice(0, 4)})
                                                    </span>
                                                    <MediaHoverComponent id={show.id} title={show.original_title} imgSrc={show.poster_path} setIsHovered={setIsHovered} overview={show.overview}/>
                                                </li>
                                            </Link>
                                       
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    )
                })}
            </section>
        )
    }

}

export default MediaCredits