import "../../Styles/Header/FoundMovieComponent.css"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react";


function SearchResultComponent(props) {

    const { title, releaseDate, searchType, knownForDepartment} = props
    const [isLoading, setIsLoading] = useState(true)


    if (searchType === "movie") {

        return (
            <div className="searchResult--info_first_suggestion-div">
                <div className="searchResult--info__container">
                    <div className="searchResult__title">{title}</div>
                    <div className="searchResult__metadata">{releaseDate.slice(0, 4)}</div>
                </div>
            </div>

        )


    } else if (searchType === "tv") {
        return (
            <div className="searchResult--info__container">
                <div className="searchResult__title">{title}</div>
                <div className="searchResult__metadata">{releaseDate.slice(0, 4)}</div>
            </div>
        )
    } else if (searchType === "person") {
        return (
            <div className="searchResult--info__container">
                <div className="searchResult__title">{title}</div>
                <div className="searchResult__metadata">{knownForDepartment}</div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}


export default SearchResultComponent