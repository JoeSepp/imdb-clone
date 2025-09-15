import "../../Styles/MovieCard.css"
import { Link } from "react-router-dom"

function ActorCard({profilePath, name, character, id}) {

    const imgSrc = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${profilePath}`

    const scrollStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <Link to={`/person/${id}`} style={scrollStyle} >
        <div className="movie-card">
            <img src={imgSrc} />
            <span className="cast-name">{name}</span>
            <span className="character">{character}</span>
        </div>
        </Link>
    )
}

export default ActorCard