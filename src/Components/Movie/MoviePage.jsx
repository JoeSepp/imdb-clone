import { Link } from "react-router-dom"
import MovieAbout from "./MovieAbout"
import { useParams } from "react-router-dom"
import MovieReviews from "./MovieReviews"
import SlickMovieGallery from "./SlickMovieGallery"
import RecommendShows from "../Galleries/RecommendShows"
import "../../Styles/Movie/MoviePage.css"

function MoviePage(props) {
    const { mediaType, id } = useParams()
    const { details, credits, cast, backgroundStyle } = props

    const linkStyle = {
        color: "white",
        textDecoration: "none",
    }

    return (
        <div className="movie-page-div">
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
            <MovieAbout cast={cast} details={details} />
            <SlickMovieGallery />
            <MovieReviews id={id} mediaType={mediaType} />
            <RecommendShows />
        </div>
    )
}

export default MoviePage