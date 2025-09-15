import MovieAbout from "./MovieAbout"
import TVAbout from "./TVAbout"
import SlickMovieGallery from "./SlickMovieGallery"
import RecommendShows from "../Galleries/RecommendShows"
import MovieReviews from "./MovieReviews"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "../../Styles/Movie/MoviePage.css"

function TVPage(props) {
    const { mediaType, id } = useParams()
    const { details, backgroundStyle, cast, credits } = props


    return (
        <div>
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
            <TVAbout cast={cast} details={details} />
            <SlickMovieGallery />
            <MovieReviews id={details.id} mediaType={mediaType} />
            <RecommendShows />
        </div>
    )

}

export default TVPage