import SearchDropdown from "./SearchDropdown"
import { useState } from "react"
import FoundMovieComponent from "./FoundMovieComponent";
import "../../Styles/Header/SearchBar.css"
import LoadingComponent from "../LoadingComponent.jsx"
import { Link } from "react-router-dom";

function SearchBar() {

    const [searchType, setSearchType] = useState("multi")
    const [searchValue, setSearchValue] = useState("")
    const [movieData, setMovieData] = useState([{}])
    const [isLoading, setIsLoading] = useState(true)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc`
        }
    };


    function getValueFromInput(val) {
        setSearchValue(prev => val.target.value)
        searchDB(val.target.value)
        displayMovieData(val.target.value.length > 1)
        if (movieData.length > 5) {
            document.querySelector(".see-all-results-searchbar").classList.add("show-more")
        } else {
            document.querySelector(".see-all-results-searchbar").classList.remove("show-more")
        }
        if (val.target.value.length < 2) {
            setIsLoading(true)
        }
    }

    function getSearchTypeValue(shortcutValue) {
        setSearchType(prev => shortcutValue)
    }

    function displayMovieData(bool) {
        if (bool === true) {
            document.querySelector(".search-result-expanded").classList.add("displayed")
        } else (
            document.querySelector(".search-result-expanded").classList.contains("displayed") && document.querySelector(".search-result-expanded").classList.remove("displayed")
        )
    }

    async function searchDB(titleName) {
        const response = fetch(`https://api.themoviedb.org/3/search/${searchType}?query=${titleName}&include_adult=false&language=en-US&page=1'`, options)
            .then(res => res.json())
            .then(res => {

                setMovieData(prev => res.results.slice(0, 6))
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            })
    }

    const searchBarElement = document.querySelector(".input-container")
    document.addEventListener("click", (e) => {
        if (e.target == searchBarElement) {
            console.log("hi")
        } else {

        }
    })

    function handleFocus(e) {
        if (e.target.classList.contains("search-box-input")) {
            document.querySelector(".search-bar").classList.add("search-bar--focused")
        } else {
            document.querySelector(".search-bar").classList.remove("search-bar--focused")
        }
    }

    document.addEventListener("click", handleFocus)

    return (

        <div className="suggestion-search-container">
            <form className="search-bar " tabIndex="1" >
                <div className="search-selector">
                    <SearchDropdown getTypeValue={getSearchTypeValue} />
                </div>
                <div className="search_form-input_container" >
                    <div className="input_container">
                        <input className="search-box-input" type="text" name="movieFinder" placeholder="search IMDB" onChange={getValueFromInput} />
                    </div>
                </div>
                <button className="suggestion-search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--magnify" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button>



                <div className="search-result-expanded">
                    {isLoading ? <LoadingComponent /> : movieData.map((movie, index) => {
                        if (movie.media_type === "tv" || searchType === "tv") {
                            return <FoundMovieComponent image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} title={movie.name} releaseDate={movie.first_air_date} key={index} id={movie.id} mediaType={"tv"} />
                        } else if (movie.known_for_department === "Acting" || searchType === "person") {
                            if (movie.profile_path) {
                                if (searchType === "multi") {
                                    setSearchType(prev => "person")
                                }
                                return <FoundMovieComponent image={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.profile_path}`} title={movie.name} mediaType={searchType} id={movie.id} releaseDate={movie.known_for_department} key={index} />
                            }
                        } else if (searchType === "company") {
                            return <FoundMovieComponent image={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.logo_path}`} title={movie.name} key={index} />
                        } else if (searchType === "movie" || searchType === "multi") {
                            return <FoundMovieComponent image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} title={movie.title} releaseDate={movie.release_date} key={index} mediaType={"movie"} id={movie.id} />
                        }
                        else {
                            return <FoundMovieComponent title={movie.name} key={index} />

                        }

                    })}
                    <Link to={`/search/1/${searchType}/${searchValue}`}>
                        <span className="see-all-results-searchbar">See all results for "{searchValue}"</span>
                    </Link>
                </div>

            </form>
        </div>

    )
}

export default SearchBar