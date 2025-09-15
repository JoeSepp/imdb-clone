import "../../Styles/Movie/BackdropGallery.css"
import { useState, useEffect } from "react"

function BackdropGallery({ imgSrc, expanded, index, handleSetExpanded }) {



    useEffect(() => {
        if (expanded) {
            document.querySelectorAll(".backdrop-image-gallery").forEach((elem) => {
                elem.classList.add("fully-expanded")
            })
        } else {
            document.querySelectorAll(".backdrop-image-gallery").forEach((elem) => {
                elem.classList.remove("fully-expanded")
            })
        }
    }, [expanded])

   

    return (
        <div>
            <img className={`backdrop-image-gallery`} src={`https://image.tmdb.org/t/p/original/${imgSrc}`} onClick={handleSetExpanded}/>
        </div>
    )


}

export default BackdropGallery