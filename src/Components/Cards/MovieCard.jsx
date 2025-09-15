import "../../Styles/CelebHero.css"
import { Link } from "react-router-dom"

function MovieCard(props) {

    const imgSrc = `https://media.themoviedb.org/t/p/w220_and_h330_face${props.poster_path}`

    return (
        <Link to={`/movie/${props.id}`}>
        <div className="movie-card">
            <img src={imgSrc} />
            <span>{props.original_title}</span>
        </div>
        </Link>
    )
}

export default MovieCard