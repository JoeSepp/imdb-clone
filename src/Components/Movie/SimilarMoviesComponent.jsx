import { useState, useEffect } from "react";
import LoadingComponent from "../LoadingComponent";
import MovieCard from "../Cards/MovieCard";
import "../../Styles/Movie/SimilarMovies.css"
import options from "../../Data/API";

function SimilarMoviesComponent({ id, mediaType }) {

    const [similarMovies, setSimilarMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => {
                setSimilarMovies(prev => res.results.slice(0, 7))
                setIsLoading(false)

            })
            .catch(err => console.error(err));
    }, [id])

    if (isLoading) {
        <LoadingComponent />
    }

    return (
        <div className="more-like-this-movies">
            <h3>More like this</h3>
            <div>
                {similarMovies.map((movie) => {
                    return <MovieCard key={movie.id} movie_title={movie.movie_original_title} poster_path={movie.poster_path} id={movie.id} />
                })}
            </div>
        </div>
    )
}

export default SimilarMoviesComponent