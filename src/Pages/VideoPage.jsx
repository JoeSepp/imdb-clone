import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"


function VideoPage() {

    const { videoKey } = useParams()
    console.log(videoKey);

    return (

        <div className="video-container">

        </div>
    )
}

export default VideoPage