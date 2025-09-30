import { Link } from "react-router-dom"
import "../../Styles/ResultBox.css"

function ResultBox({ id, poster_path, title, overview, type }) {

    const imgSrc = `https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <Link to={`/${type}/${id}`} style={linkStyle}>
            <div className="search-results-box">
                <img src={imgSrc} />
                <div>
                    <h1>{title}</h1>
                    <p>{overview}</p>
                </div>
            </div>
        </Link>
    )
}

export default ResultBox