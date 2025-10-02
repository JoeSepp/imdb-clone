import { useParams } from "react-router-dom"
import { useState, useEffect, useTransition } from "react"
import LoadingComponent from "../LoadingComponent.jsx"
import MovieCard from "../Cards/MovieCard.jsx"
import MediaCredits from "../CelebPage/MediaCredits.jsx"

import '../../Styles/CelebHero.css'

function CelebHero() {
    const { id } = useParams()
    const [personDetails, setPersonDetails] = useState([]);
    const [knownForMovies, setKnownForMovies] = useState([]);
    const [biography, setBiography] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [readMore, setReadMore] = useState("...show more");
    const [prevId, setPrevId] = useState(id)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setPersonDetails(res)
                if (res.biography.length >= 450) {
                    setBiography(res.biography.slice(0, 450))
                } else {
                    setBiography(res.biography)
                    setReadMore("")
                }

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)


            })
            .catch(err => console.error(err));

    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => setKnownForMovies(res.cast.slice(0, 15)))
            .catch(err => console.error(err));
    }, [id])

    function resizeParagraph(e) {
        if (!isLoading && readMore === "...show more") {
            setBiography(prev => personDetails.biography)
            e.target.classList.add("hide")
        }
    }

    if (prevId !== id) {
        setPrevId(id);
        location.reload()
    }


    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <>
            <section className="celeb-hero-section-flex">
                <div className="personal-info-box">
                    <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${personDetails.profile_path}`} />
                    <h3>Full name</h3>
                    <span>{personDetails.name}</span>
                    <h3>Birthday</h3>
                    <span>Born {personDetails.birthday}</span>
                    <span>{personDetails.deathday && "Died " + personDetails.deathday}</span>
                    <span>{personDetails.place_of_birth}</span>
                    <h3>Department</h3>
                    <span>{personDetails.known_for_department}</span>
                </div>
                <div className="biography-box">
                    <h2>{personDetails.name}</h2>
                    <span className="biography-header">Biography</span>
                    <p>
                        {biography}
                    </p>
                    {readMore !== "" && <span className="show-more-text" onClick={resizeParagraph}>{readMore}</span>}
                    <h3>Known for</h3>
                    <div className="known-for-movies-flex">
                        {knownForMovies.map((movie, index) => {
                            return <MovieCard key={index} id={movie.id} poster_path={movie.poster_path} />
                        })}
                    </div>
                </div>
            </section>
            <MediaCredits type={"movie"} options={options} />
            <MediaCredits type={"tv"} options={options} />
        </>
    )
}


export default CelebHero