import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Arrows/NextArrow.jsx";
import PrevArrow from "../Arrows/PrevArrow.jsx";
import LoadingComponent from "../LoadingComponent.jsx";
import MovieCardComponent from "../Cards/MovieCardComponent.jsx";
import "../../Styles/Galleries/MovieSlider.css"

function MovieSlider(props) {

    const { header, subtext, sliderType, ranked} = props

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const settings = {
        className: "movies-slick",
        speed: 500,
        lazyLoad: true,
        infinite: false,
        draggable: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

    useEffect(() => {
        const response = fetch(props.api, options)
            .then(res => res.json())
            .then(res =>{
                setMovies(res.results)
                setTimeout(()=>{
                    setIsLoading(false)
                }, 1000)
            })
            .catch(err => console.error(err))
    }, [])

    if(isLoading){
        return <LoadingComponent />
    }

    return (
        <div className="movie-gallery-container">
            <span className="container-header">
                {header}
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
            </span>
            <span className="header-subtext">{subtext}</span>
            <div className="movie-slider-container">
                <Slider {...settings}>
                    {movies.map((movie, index) => {
                        return (<div key={movie.id}>
                            <MovieCardComponent id={movie.id} movieTitle={movie.title} movieRating={movie.vote_average} moviePoster={movie.poster_path} showName={movie.name} ranked={ranked} rank={index + 1} mediaType={movie.media_type}/>
                        </div>)
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default MovieSlider