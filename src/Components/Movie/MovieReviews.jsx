import { useState, useEffect } from "react"
import ReviewBox from "./ReviewBox.jsx";
import options from "../../Data/API.js";

function MovieReviews({mediaType , id}) {

    const [reviews, setReviews] = useState([])

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