import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import LoadingComponent from "../LoadingComponent.jsx"
import ResultBox from "./ResultBox.jsx"
import options from "../../Data/API.js"


/* POTŘEBA DODĚLAT ABY DOLE BYLO VIDĚT KOLIK JE STRÁNEK S VÝSLEDKAMA */

function SearchPageComponent() {
    const { pageNumber, searchType, searchQuery } = useParams()
    const [results, setResults] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [numOfPages, setNumOfPages] = useState()
    const [pages, setPages] = useState([1])
    const [prevPage, setPrevPage] = useState(pageNumber)
    const [prevType, setPrevType] = useState(searchType)

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/${searchType}?query=${searchQuery}&include_adult=false&language=en-US&page=${pageNumber}`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setResults(res.results)
                setNumOfPages(res.total_pages)
                setIsLoading(false)
            })
            .catch(err => console.error(err));

    }, [searchQuery, pageNumber])

    function handleSetPages(num) {
        setPages(prev => [...prev, num])
    }

    function getCurrentPage() {
        document.querySelector(`.page_${pageNumber}`).classList.add("current_page")
    }

    useEffect(() => {
        for (var i = 2; i <= numOfPages; i++) {
            handleSetPages(i)
        }

        setTimeout(() => {
            getCurrentPage()
        }, 100)

    }, [numOfPages])

    if (prevPage !== pageNumber || prevType !== searchType ) {
        setPrevPage(pageNumber)
        setPrevType(searchType)
        window.location.reload()
        window.location.scrollTop()
    }

    if (loading) {
        return <LoadingComponent />
    }

    return (

        <section className="search-results-page-section">
            {results.map((res, index) => {
                return <ResultBox
                    key={index}
                    id={res.id}
                    poster_path={res.poster_path}
                    title={res.name ? res.name : res.title}
                    overview={res.overview}
                    type={res.media_type}
                />
            })}
            <div>
                <ul>
                    {pages.map((page, index) => {
                        return (
                            <Link to={`/search/${page}/${searchType}/${searchQuery}`} key={index} style={linkStyle} className="page-link">
                                <li className={`page_${page} page_list`}>{page}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SearchPageComponent