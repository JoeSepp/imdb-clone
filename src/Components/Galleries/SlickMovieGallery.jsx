import Slider from "react-slick"
import BackdropGallery from "../Galleries/BackdropGallery"
import LoadingComponent from "../LoadingComponent"
import NextArrow from "../Arrows/NextArrow"
import PrevArrow from "../Arrows/PrevArrow"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

function SlickMovieGallery() {
    const { mediaType, id } = useParams()
    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    let slickRef = useRef(null)


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

    const settings = {
        className: "backdrop-slick",
        lazyLoad: false,
        infinite: true,
        speed: 800,
        draggable: false,
        cssEase: 'ease-in-out',
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/images`, options)
            .then(res => res.json())
            .then(res => {
                setGallery(res.backdrops.slice(0, res.backdrops.length / 2))


                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
            .catch(err => console.error(err));
    }, [id, mediaType])

    if (loading) {
        return <LoadingComponent />
    }


    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <Slider {...settings}>
                {gallery.map((image, index) => {
                    return <BackdropGallery imgSrc={image.file_path}/>
                })}
            </Slider>
        </section>
    )
}

export default SlickMovieGallery