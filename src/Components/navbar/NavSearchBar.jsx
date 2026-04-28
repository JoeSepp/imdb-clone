import SearchDropdown from "./SearchDropdown.jsx"
import { useState, useEffect } from "react"
import FoundMovieComponent from "./FoundMovieComponent.jsx";
import "../../Styles/Header/SearchBar.css"
import LoadingComponent from "../LoadingComponent.jsx"
import { Link, Form, data } from "react-router-dom";


function NavSearchBar() {

    const [searchType, setSearchType] = useState("multi")
    const [searchTypeText, setSearchTypeText] = useState("All")
    const [databaseData, setDatabaseData] = useState([{}])
    const [isLoading, setIsLoading] = useState(true)
    const [isFocused, setIsFocused] = useState(false)

    const options = [
        {
            label: "All", value: "multi", icon: <svg data-value="All" data-shortvalue="df" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--search searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        },
        {
            label: "Movies", value: "movie", icon: <svg data-value="Titles" data-shorvalue="movie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--movie searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>
        },
        {
            label: "TV episodes", value: "tv", icon: <svg data-value="TV episodes" data-shortvalue="tv" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--television searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path></svg>
        },
        {
            label: "Celebs", value: "person", icon: <svg data-value="Celebs" data-shortvalue="person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--people searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
        },
        {
            label: "Companies", value: "company", icon: <svg data-value="Companies" data-shortvalue="company" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--business searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>

        },
        {
            label: "Keyword", value: "kw", icon: <svg data-value="Keywords" data-shortvalue="keyword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--label searchCatSelector__itemIcon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path></svg>
        },
        {
            label: "Divider"
        }
    ]

    const APIoptions = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc`
        }
    };

    async function searchDB(inputText) {
        console.log(inputText)
        const response = fetch(`https://api.themoviedb.org/3/search/${searchType}?query=${inputText}&include_adult=false&language=en-US&page=1'`, APIoptions)
            .then(res => res.json())
            .then(res => setDatabaseData(res.results.slice(0, 8)))
    }

    function suggestionSearchHandler(e) {
        if (e.target.value) {
            searchDB(e.target.value)
        } else {
            setDatabaseData([])
        }
    }

    function handleMenuSelector(e) {
        document.querySelector(".searchCatSelector-menu").classList.toggle("searchCatSelector-menu-open")
    }

    function handleFocus(e) {
        if (e.target.classList.contains("search-box-input")) {
            document.querySelector(".search-bar").classList.add("search-bar--focused")
            setIsFocused(true)
        } else {
            document.querySelector(".search-bar").classList.remove("search-bar--focused")
            setIsFocused(false)
        }
    }
    document.addEventListener("click", handleFocus)


    return (
        <div className="suggestion-search-container">
            <Form className="search-bar" method="post" role="search" action="/test/" name="nav-search-form">
                <div className="category-selector-button" onClick={handleMenuSelector}>
                    <span className="category-selector-text">
                        <input type="hidden" name="s" id="quicksearch" value={searchType}></input>
                        <label htmlFor="navbar-search-category-select" data-testid="category-selector-button" className="nav-search-form__categories">
                            <span className="sm_btn-txt">{searchTypeText}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--arrow-drop-down ipc-btn__icon ipc-btn__icon--post searchCatSelector-button-post-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>
                        </label>
                    </span>
                    <div>
                        <div className="searchCatSelector-menu" data-menu-id="navbar-search-category-select" role="presentation">
                            <div className="menu__items">
                                <ul className="searchCatSelector" role="menu">
                                    {options.map((item) => {
                                        return (item.label === "Divider" ? <li className="searchCatSelector__item-divider" key={item.label}></li> : <li key={item.value}
                                            className={`searchCatSelector__item searchCatSelector__item-${item.value}`}
                                            onClick={() => {
                                                setSearchType(item.value)
                                                setSearchTypeText(item.label)
                                            }
                                            }
                                            style={{ color: searchType === item.value ? "#F5C518" : "white" }}
                                        >
                                            <span className="list-item__text">
                                                {item.icon}
                                                {item.label}
                                            </span>
                                        </li>)
                                    })}
                                    {/* SEM PŘIDAT ADVANCED SEARCH */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search_form-input_container" >
                    <div className="input_container">
                        <input className="search-box-input" type="text" name="movie-finder" autoComplete="off" placeholder="search IMDB" onChange={suggestionSearchHandler} required />
                        <div className="autosuggest_suggestions-container" role="listbox">
                            <ul className="suggestions_results-list">
                                {isFocused &&
                                    databaseData.map((result) => {
                                        return (<li role="option" className={`suggestions__result suggestions__result-${result.id}`} key={result.id}>
                                            <div className="searchResult--image">
                                                {result.poster_path ? <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${result.poster_path}`} key={`imgId-${result.id}`} /> : <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${result.profile_path}`} />}
                                            </div>
                                            {(result.media_type === "movie" || searchType === "movie") &&
                                                <Link to={`/${result.media_type ? result.media_type : searchType}/${result.id}`} style={{ textDecoration: "none", color: "white" }}>
                                                    <div className="searchResult--info__container">
                                                        <div className="searchResult__title">{result.title}</div>
                                                        <div className="searchResult__metadata">{result.release_date.slice(0, 4)}</div>
                                                    </div>
                                                </Link>}
                                            {result.media_type === "tv" &&
                                                <div className="searchResult--info__container">
                                                    <div className="searchResult__title">{result.name}</div>
                                                    <div className="searchResult__metadata">{result.first_air_date.slice(0, 4)}</div>
                                                </div>}
                                            {result.media_type === "person" &&
                                                <Link to={`/person/${result.id}`} style={{ textDecoration: "none", color: "white" }}>
                                                    <div className="searchResult--info__container">
                                                        <div className="searchResult__title">{result.name}</div>
                                                        <div className="searchResult__metadata">{result.known_for_department}</div>
                                                    </div>
                                                </Link>}

                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="suggestion-search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--magnify" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button>
            </Form>
        </div>
    )

}

export const formSubmitAction = async ({ request }) => {

    const data = await request.formData()

    const submission = {
        searchQuery: data.get('movie-finder'),
        searchType: data.get('s'),
    }

    console.log(submission)
}

export default NavSearchBar
