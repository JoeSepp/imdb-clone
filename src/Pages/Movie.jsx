import Header from "../Components/navbar/Header.jsx"
import Footer from "../Components/Footer.jsx"
import MediaPage from "../Components/Movie/MediaPage.jsx"
import { useState } from "react"

function Movie() {
    const [hasCollection, setHasCollection] = useState(false)
    const [movieId, setMovieId] = useState()
    const [mediaType, setMediaType] = useState('movie')

    return (
        <div className="movie">
            <MediaPage />
        </div>
    )
}

export default Movie