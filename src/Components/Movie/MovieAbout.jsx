import ActorCard from "../Cards/ActorCard"
import "../../Styles/Movie/MovieAbout.css"


function MovieAbout({ cast, details }) {


    function toCurrency(amount) {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        return USDollar.format(amount)
    }
    
    return (
        <section className="movie-about-section-grid">
            {cast.length > 5 && <div className="cast-crew-flex">
                <h2>Top cast</h2>
                <div>
                    {cast.map((actor) => {
                        return <ActorCard key={actor.id} profilePath={actor.profile_path} name={actor.name} id={actor.id} character={actor.character} />
                    })}
                </div>
            </div>}
            <div className="movie-info">
                <div>
                    <h3>Status</h3>
                    <span>{details.status}</span>
                </div>
                <div>
                    <h3>Runtime</h3>
                    <span>{details.runtime} minutes</span>
                </div>
                <div>
                    <h3>Original language</h3>
                    <span>{details.spoken_languages[0].name}</span>
                </div>
                <div>
                    <h3>Budget</h3>
                    <span>{toCurrency(details.budget)}</span>
                </div>
                <div>
                    <h3>Revenue</h3>
                    <span>{toCurrency(details.revenue)}</span>
                </div>
            </div>
        </section>
    )
}

export default MovieAbout