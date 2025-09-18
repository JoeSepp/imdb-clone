import ActorCard from "../Cards/ActorCard"
import "../../Styles/Movie/MovieAbout.css"
import "../../Styles/Movie/TVAbout.css"


function TVAbout({ cast, details }) {

    function getSeasonRating(count) {
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

    return (
        <section className="movie-about-section-grid">
           { cast.length > 5 && <div className="cast-crew-flex">
                <h2>Top cast</h2>
                <div>
                    {cast && cast.map((actor) => {
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
                    <h3>Number of episodes</h3>
                    <span>{details.number_of_episodes} episodes</span>
                </div>
                <div>
                    <h3>Seasons</h3>
                    <ul className="seasons-ul" style={{listStyleImage: getSeasonRating(details.vote_average)}}>
                        {details.seasons.map((season, index) => {
                            return (<li key={index}>
                                {season.name} ({season.episode_count} episodes)
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TVAbout