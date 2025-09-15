import "../../Styles/Galleries/MovieCard.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function MovieCardComponent(props) {

    let mediaType = "movie"
    const { movieTitle, movieRating, moviePoster, showName, ranked, rank, id } = props

   if(showName){
    mediaType = "tv"
   }


    return (
        <Link to={`/${mediaType}/${id}`}>
            <div className="movie-poster-container">
                <svg className="ipc-watchlist-ribbon__bg" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation"><polygon className="ipc-watchlist-ribbon__bg-ribbon" fill="#f8f8f8ff" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                </svg>
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${moviePoster}`} />
                <div className="movie-desc-box">
                    <div className="m-rank-flex">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                        {Math.round(movieRating * 10) / 10}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--star-border-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>
                    </div>
                    <span className="m-header">{ranked && rank + "."} {movieTitle ? movieTitle : showName}</span>
                    <button className="button-watch-options">Watch options</button>
                    <div className="m-trailer-info">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>
                            Trailer
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--info" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCardComponent