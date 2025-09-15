import "../../Styles/Movie/BackdropGallery.css"

function BackdropGallery({imgSrc}){

    return (
        <div>
            <img className="backdrop-image-gallery" src={`https://image.tmdb.org/t/p/original/${imgSrc}`} />
        </div>
    )
}

export default BackdropGallery