import Header from "../Components/navbar/Header"
import Footer from "../Components/Footer.jsx"
import MovieHero from "../Components/Movie/MovieHero"
import SimilarMoviesComponent from "../Components/Movie/SimilarMoviesComponent.jsx"
import CollectionComponent from "../Components/Movie/CollectionComponent.jsx"
import { useState } from "react"

function Movie() {
    const [hasCollection, setHasCollection] = useState(false)
    const [movieId, setMovieId] = useState()
    const [mediaType, setMediaType] = useState('movie')
    
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="movie">
                <MovieHero setHasCollection={setHasCollection} setMovieId={setMovieId} setMediaType={setMediaType} />
                {(hasCollection && movieId) && <CollectionComponent id={movieId} mediaType={mediaType} />}
                {/* {movieId && <SimilarMoviesComponent id={movieId} mediaType={mediaType}/>}              možná odebrat? nedůležité*/}
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Movie