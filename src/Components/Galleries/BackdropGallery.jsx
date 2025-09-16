import "../../Styles/Movie/BackdropGallery.css"
import { useState, useEffect } from "react"

function BackdropGallery({ imgSrc, expanded}) {
   
    return (
        <div>
            <img className="backdrop-image-gallery" src={`https://image.tmdb.org/t/p/original/${imgSrc}`} />
        </div>
    )


}

export default BackdropGallery