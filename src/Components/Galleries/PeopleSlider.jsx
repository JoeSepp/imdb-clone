import React, { act, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Galleries/PeopleSlider.css"
import ActorProfile from "../Cards/ActorProfile.jsx";
import NextArrow from "../Arrows/NextArrow.jsx";
import PrevArrow from "../Arrows/PrevArrow.jsx";

function PeopleSlider(props) {

    const [actors, setActors] = React.useState([]);

    var settings = {
        className: "actors-slick",
        speed: 800,
        lazyLoad: true,
        infinite: false,
        draggable: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    }

    if (window.innerWidth <= 600) {
        settings = {
            ...settings,
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc'
        }
    };

    useEffect(() => {
        const response = fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => setActors(res.results))
            .catch(err => console.error(err))

    }, [])

    return (
        <div className="people-gallery-container">
            <span className="container-header">
                Most popular celebrities
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
            </span>
            <div className="actor-slider-container">
                <span className="people-gallery-heading">BY RANKING</span>
                <Slider {...settings}>

                    {actors.map((actor, index) => {
                        if (actor.known_for_department === "Acting") {
                            return (<div key={actor.id}>
                                <ActorProfile rank={index} name={actor.name} image={actor.profile_path} id={actor.id} />
                            </div>)
                        }
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default PeopleSlider