import "../../Styles/Header/FoundMovieComponent.css"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react";

const YT_IMG = "https://img.youtube.com/vi"

function SearchResultComponent(props) {

    const { title, releaseDate, searchType, knownForDepartment, trailers, index } = props
    const [isLoading, setIsLoading] = useState(true)

    let trailer = [];
    let clip = [];

    function getVideosForResult(arr) {
        if (arr && arr.length > 0) {
            trailers.map((elem) => {
                if (elem.type === "Trailer") {
                    trailer.push(elem)
                }
                if (elem.type === "Clip") {
                    clip.push(elem)
                }
            })
        }

        clip.slice(0, 1)
        trailer.slice(0, 1)
    }

    if (searchType === "movie") {
        if (index < 2) {

            getVideosForResult(trailers)
            return (
                <>
                    <div className="searchResult--info__container">
                        <div className="searchResult__title">{title}</div>
                        <div className="searchResult__metadata">{releaseDate.slice(0, 4)}</div>
                    </div>
                    <div className="clips-container">
                        <img src={trailer?.[index] ? `${YT_IMG}/${trailer[index].key}/0.jpg` : null} />
                        <img src={clip?.[index] ? `${YT_IMG}/${clip[index].key}/0.jpg` : null} />
                    </div>
                </>
               
            )
        } else {
            return (
                <div className="searchResult--info__container">
                    <div className="searchResult__title">{title}</div>
                    <div className="searchResult__metadata">{releaseDate.slice(0, 4)}</div>
                </div>
            )
        }


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