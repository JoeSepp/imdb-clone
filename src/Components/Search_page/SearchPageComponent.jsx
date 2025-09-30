import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import LoadingComponent from "../LoadingComponent.jsx"
import ResultBox from "./ResultBox.jsx"
import options from "../../Data/API.js"


function SearchPageComponent() {
    const { pageNumber, searchType, searchQuery } = useParams()
    const [results, setResults] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [numOfPages, setNumOfPages] = useState()
    const [pages, setPages] = useState([1])

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

    }, [searchQuery])


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
                    title={res.name}
                    overview={res.overview}
                    type={res.media_type}
                />
            })}
            <div>
                <ul>
                </ul>
            </div>
        </section>
    )
}

export default SearchPageComponent