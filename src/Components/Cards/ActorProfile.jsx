import { Link } from "react-router-dom"

import "../../Styles/Galleries/ActorProfile.css"

function ActorProfile(props) {
    return (
        <Link to={`/person/${props.id}`}>
            <div className="actor-ranking-profile">
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${props.image}`} />
                <span className="rank-pos_txt">{props.rank + 1}</span>
                <span className="actor-name_txt">{props.name}</span>
            </div>
        </Link>
    )
}


export default ActorProfile