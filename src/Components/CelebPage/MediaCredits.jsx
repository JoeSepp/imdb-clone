import { Link } from "react-router-dom";
import "../../Styles/Movie/MediaCredits.css"

function MediaCredits({ creditsList, type, years }) {

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

    if (type === "movie") {

        return (
            <section className="media-credits">
                <h2>Movies</h2>
                {years.map((year, index) => {
                    return (
                        <div key={index}>
                            <h3>{year}</h3>
                            <ul >
                                {creditsList.map((show, index) => {
                                    if (show.release_date.slice(0, 4) === year) {
                                        if(show.release_date === ''){
                                            return
                                        }

                                        return (
                                            <Link key={index}  to={`/${type}/${show.id}`} className="movie-link-router">
                                            <li style={{ listStyleImage: getRatingColor(show.vote_average) }}>
                                                <span>
                                                    {show.original_title}
                                                    ({show.release_date.slice(0, 4)})
                                                </span>
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

/*     {creditsList.map((show, index) => {
                        return (
                            <li key={index} style={{listStyleImage: getRatingColor(show.vote_average)}}>
                                <span>
                                    {show.original_title}
                                    ({show.release_date.slice(0, 4)})
                                </span>
                            </li>
                        )
                    })} */

export default MediaCredits