import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingComponent from "../LoadingComponent";
import MovieCard from "../Cards/MovieCard";

function CollectionComponent({ id, mediaType }) {

    const [collectionData, setCollectionData] = useState([]);
    const [collectionFromId, setCollectionFromId] = useState(0);
    const [isLoading, setIsLoading] = useState(true);



    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };




    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setCollectionFromId(res.belongs_to_collection.id)
            })
            .catch(err => console.error(err));
    },
        [id])

    useEffect(() => {
        if (collectionFromId) {
            fetch(`https://api.themoviedb.org/3/collection/${collectionFromId}?language=en-US`, options)
                .then(res => res.json())
                .then(res => {
                    setCollectionData(res.parts)

                    setTimeout(()=>{
                         setIsLoading(false)
                    }, 1500)
                   
                })
                .catch(err => console.error(err));
        }

    }, [collectionFromId])

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <div className="more-movies-from-collection">
            <h3>See full collection</h3>
            <div>
                {collectionData.map((movie) => {
                    return <MovieCard key={movie.id} movie_title={movie.movie_original_title} poster_path={movie.poster_path} id={movie.id} />
                })}
            </div>
        </div>
    )


}

export default CollectionComponent