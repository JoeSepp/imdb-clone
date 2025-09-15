import "../../Styles/Header/FoundMovieComponent.css"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react";

function FoundMovieComponent(props) {

    const { image, title, releaseDate, id, mediaType } = props

    return (
        <Link to={`/${mediaType}/${id}`}>
            <div className="search-bar-movie-expanded">
                <img src={image} />
                <div className="search-bar-movie-expanded-data">
                    <span className="expanded-movie-header">{title}</span>
                    <span className="expanded-movie-date">{releaseDate&& releaseDate.slice(0,4)}</span>
                </div>
            </div>
        </Link>

    )
}


export default FoundMovieComponent