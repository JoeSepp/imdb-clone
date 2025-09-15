import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Vibrant } from "node-vibrant/worker";
import LoadingComponent from "../LoadingComponent";
import MoviePage from "./MoviePage.jsx";
import TVPage from "./TVPage.jsx";
import ActorCard from "../Cards/ActorCard.jsx"

import "../../Styles/Movie/MovieHero.css"

function MovieHero({ setHasCollection, setMovieId, setMediaType }) {
    const { mediaType, id } = useParams()
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [prevId, setPrevId] = useState(id)
    const [credits, setCredits] = useState([])
    const [cast, setCast] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`, options)
                .then(res => res.json())
                .then(res => {
                    setDetails(prev => res)
                    setMovieId(id)
                    setMediaType(mediaType)
                    setLoading(false)
                    if (res.belongs_to_collection) {
                        setHasCollection(true)
                    }
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

    if (prevId !== id) {
        setPrevId(id);
        location.reload()
    }

    if (loading) {
        return <LoadingComponent />
    }

    if (mediaType === "movie") {
        const backgroundStyle = getRatingColor(details.vote_average)

        return (
            <>
                <MoviePage details={details} credits={credits} cast={cast} backgroundStyle={backgroundStyle} />
            </>

        )
    }

    if (mediaType === "tv") {

        const backgroundStyle = getRatingColor(details.vote_average)

        return (
            <TVPage details={details} credits={credits} cast={cast} backgroundStyle={backgroundStyle}/>
        )
    }
}

export default MovieHero