import Slider from "react-slick"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NextArrow from "../Arrows/NextArrow"
import PrevArrow from "../Arrows/PrevArrow"
import BackdropGallery from "./BackdropGallery"

function RecommendShows() {
    const { mediaType, id } = useParams()
    const [recommendations, setRecommendations] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

    const settings = {
        className: "backdrop-slick",
        lazyLoad: true,
        infinite: true,
        speed: 800,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setRecommendations(res.results))
            .catch(err => console.error(err));
    }, [id])

    return (
        <section className="gallery">
            <h2>Recommendations</h2>
            <Slider {...settings}>
                {recommendations.map((show) => {
                    return (
                        <Link to={`/${mediaType}/${show.id}`}>
                            <BackdropGallery imgSrc={show.poster_path} />
                        </Link>
                    )
                })}
            </Slider>
        </section>
    )
}

export default RecommendShows