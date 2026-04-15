import { useState, useEffect } from "react"
import ReviewBox from "./ReviewBox.jsx";

function MovieReviews({ mediaType, id }) {

    const [reviews, setReviews] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzMzMTUwMzg2NDYxODMzMzEwNTc5ZmUwOTNlMDMyNiIsIm5iZiI6MTc1NTA2Nzg5Ny44OTUsInN1YiI6IjY4OWMzNWY5MzdlYjk3ZWM3NGI3MDk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqDk6K8luPmOh1yruRo-hz5wZk_zEEBeKQBZoD1Ikgc`
        }
    };


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/reviews?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setReviews(res.results.slice(0, 3)))
            .catch(err => console.error(err));

    },
        [id])


    if (reviews.length > 0) {
        return (
            <section className="reviews-section">
                <h3>Reviews</h3>
                {reviews.map((review, index) => {
                    return <ReviewBox key={index} reviewDetails={review} />
                })}
            </section>
        )
    }
}


export default MovieReviews