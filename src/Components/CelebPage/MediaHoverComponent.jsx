import "../../Styles/MediaHoverComponent.css"


function MediaHoverComponent({ imgSrc, title, id, setIsHovered, overview }) {

    function handleMouseLeave() {
        document.querySelector(`.div-${id}`).classList.remove("display")
        setIsHovered(false)
    }

    return (
        <div className={`hovered-movie-div div-${id}`} onMouseLeave={handleMouseLeave}>
            {imgSrc && <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${imgSrc}`} />}
            <span>
                <h1>{title}</h1>
                <p>{overview.slice(0,100)}...</p>
            </span>
        </div>
    )
}

export default MediaHoverComponent