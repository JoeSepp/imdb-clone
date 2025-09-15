import "../Styles/MovieList.css"
import MovieCard from "./MovieCard.jsx"
import { useEffect, useState } from "react"


function MovieList() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                console.log(res.results)
                setMovies(res.results)
            })
            .catch(err => console.error(err));
    },[])



    return (
        <section className="top-movies-section">
            {movies.map((movie, index) => {
                return <MovieCard key={index} {...movie} />
            })}
        </section>
    )
}


export default MovieList 