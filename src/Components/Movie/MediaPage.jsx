import { Link } from "react-router-dom"
import MovieAbout from "./MovieAbout"
import { useParams } from "react-router-dom"
import MovieReviews from "./MovieReviews"
import SlickMovieGallery from "../Galleries/SlickMovieGallery"
import RecommendShows from "../Galleries/RecommendShows"
import MediaHero from "./MediaHero"
import LoadingComponent from "../LoadingComponent"
import TVAbout from "./TVAbout"
import "../../Styles/Movie/MoviePage.css"
import { useState, useEffect } from "react"

function MoviePage() {
    const { mediaType, id } = useParams()
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [credits, setCredits] = useState([])
    const [prevId, setPrevId] = useState(id)
    const [cast, setCast] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc`
        }
    };


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`, options)
                .then(res => res.json())
                .then(res => {
                    setDetails(prev => res)
                    setLoading(false)
                }
                )
                .catch(err => console.error(err));
        }
        setTimeout(() => {
            fetchData()
        }, 1000)

    }, [id, mediaType])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                if (getDirecting(res.crew)) {
                    if (getWriting(res.crew)) {
                        const authors = [getDirecting(res.crew), getWriting(res.crew)]
                        setCredits(authors)
                    } else {
                        const authors = [getDirecting(res.crew)]
                        setCredits(authors)
                    }
                }
                setCast(res.cast.slice(0, 10))
            })
            .catch(err => console.error(err));
    }, [id, mediaType])

    function getDirecting(crew) {
        const crewCredits = crew.filter((crewman) => {
            if (crewman.known_for_department === "Directing") {
                return crewman.known_for_department
            }
        });


        return crewCredits[0]
    }

    function getWriting(crew) {
        const crewCredits = crew.filter((crewman) => {
            if (crewman.known_for_department === "Writing") {
                return crewman.known_for_department
            }
        });

        return crewCredits[0]
    }

    if (prevId !== id) {
        setPrevId(id)
        window.location.reload()
        window.location.scrollTop()
    }

    if (loading) {
        return <LoadingComponent />
    }


    return (
        <div className="movie-page-div">
            <div className="page-content-container">
                <MediaHero details={details} credits={credits} cast={cast} />
                {mediaType === "movie" && cast ? <MovieAbout cast={cast} details={details} /> : <TVAbout cast={cast} details={details} />}
                <SlickMovieGallery />
                <MovieReviews id={id} mediaType={mediaType} />
                <RecommendShows />
            </div>
        </div>
    )

}

export default MoviePage