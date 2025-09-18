import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "../../Styles/Movie/MovieHero.css"

function MediaHero({ details, credits}) {
    const { mediaType, id } = useParams()

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
        return `conic-gradient(${color} ${Math.round(count * 10)}%, #ffffff00 1%)`
    }

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    console.log(credits)

    if (mediaType === "movie") {
        const backgroundStyle = getRatingColor(details.vote_average)

        return (
            <>
                <section className="movie-hero-section">
                    {details.backdrop_path ? <img className="backdrop-image" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} /> : <div className="no-background-image-filler"></div>}
                    <div className="movie-details-container">
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} />
                        <div className="movie-details">
                            <span className="movie-details-header">
                                <h2>{details.title}</h2>
                                <span>({details.release_date.slice(0, 4)})</span>
                            </span>
                            {details.genres && <ul>
                                {details.genres.map((genre) => {
                                    return <li key={genre.id}>{genre.name}</li>
                                })}
                            </ul>}
                            <div className="movie-details-ranking-div">
                                <div className="rating-circle" style={{ backgroundImage: backgroundStyle }}></div>
                                <span className="rank-percent">{details.vote_average && Math.round(details.vote_average * 10)}</span>
                            </div>
                            <div className="movie-details-overview">
                                <span>{details.tagline}</span>
                                <h3>Overview</h3>
                                <p>{details.overview}</p>
                            </div>
                            <div className="movie-details-credits-cast">
                                <div>
                                    {credits && credits.map((author) => {
                                        return (
                                            <div key={author.id} className="cast-info">
                                                <span className="character" >{author.job && author.job}</span>
                                                <Link to={`/person/${author.id}`} style={linkStyle}>
                                                    <span className="cast-name">{author.name}</span>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    if (mediaType === "tv") {
        const backgroundStyle = getRatingColor(details.vote_average)

        return (
            <section className="movie-hero-section">
                {details.backdrop_path ? <img className="backdrop-image" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} /> : <div className="no-background-image-filler"></div>}
                <div className="movie-details-container">
                    <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} />
                    <div className="movie-details">
                        <span className="movie-details-header">
                            <h2>{details.name}</h2>
                            {details.first_air_date && <span>({details.first_air_date.slice(0, 4) + "-" + details.last_air_date.slice(0, 4)})</span>}
                        </span>
                        {details.genres && <ul>
                            {details.genres.map((genre) => {
                                return <li key={genre.id}>{genre.name}</li>
                            })}
                        </ul>}
                        <div className="movie-details-ranking-div">
                            <div className="rating-circle" style={{ backgroundImage: backgroundStyle }}></div>
                            <span className="rank-percent">{details.vote_average && Math.round(details.vote_average * 10)}</span>
                        </div>
                        <div className="movie-details-overview">
                            <span>{details.tagline}</span>
                            <h3>Overview</h3>
                            <p>{details.overview}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MediaHero