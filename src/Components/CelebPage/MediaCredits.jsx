import { Link, useParams } from "react-router-dom";
import "../../Styles/Movie/MediaCredits.css"
import MediaHoverComponent from "./MediaHoverComponent";
import { useState, useEffect } from "react"
import LoadingComponent from "../LoadingComponent";


function MediaCredits({ type, options }) {

    const { mediaType, id } = useParams()
    const [isHovered, setIsHovered] = useState(false)
    const [creditsList, setCreditsList] = useState([])
    const [yearList, setYearList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}/${type}_credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setCreditsList(res.cast)
                let years = res.cast.map((show) => {
                    if (show.release_date) {
                        return show.release_date.slice(0, 4)
                    } else if (show.first_air_date){
                        return show.first_air_date.slice(0,4)
                    }
                })
                let uniq = [...new Set(years)]
                uniq.sort()
                uniq.reverse()
                setYearList(uniq)
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    }, [id])

    function getRatingColor(count) {
        let color;

        if (Math.round(count * 10) > 70) {
            color = "#00ff37"
        } else if (Math.round(count * 10) > 50) {
            color = "#fffb00ff"
        } else if (Math.round(count * 10) > 30) {
            color = "#ffa600ff"
        } else {
            color = "#7d0101"
        }
        return `conic-gradient(${color})`
    }

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    function handleMouseClick(e) {
        if (!isHovered) {
            document.querySelector(`.div-${e.target.dataset.listid}`).classList.add("display")
            e.target.checked = false
            setIsHovered(true)
        }
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <section className="media-credits">
            {type === "movie" ? <h2>Movies</h2> : <h2>TV Shows</h2>}
            {yearList.map((year, index) => {
                if (year === '') {
                    return
                }
                return (
                    <div key={index}>
                        <h3>{year}</h3>
                        <ul >
                            {creditsList.map((show, index) => {
                                if (show.release_date && show.release_date.slice(0, 4) === year || show.first_air_date && show.first_air_date.slice(0, 4) === year) {
                                    if (show.release_date === '' || show.first_air_date === '') {
                                        return
                                    }

                                    return (
                                        <div key={index}>
                                            <li className="movie-ul-list-media" style={{ listStyleImage: getRatingColor(show.vote_average) }}>
                                                <Link to={`/${type}/${show.id}`} className="movie-link-router">
                                                    <span>
                                                        {show.original_title ? show.original_title : show.original_name}
                                                        ({show.release_date ? show.release_date.slice(0, 4) : show.first_air_date.slice(0, 4)})
                                                    </span>
                                                    <MediaHoverComponent id={show.id} title={show.original_title ? show.original_title : show.original_name} imgSrc={show.poster_path} setIsHovered={setIsHovered} overview={show.overview} />
                                                </Link>
                                                <input type="checkbox" data-listid={show.id} onClick={handleMouseClick} />
                                            </li >
                                        </div>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                )
            })
            }
        </section >
    )
}

export default MediaCredits