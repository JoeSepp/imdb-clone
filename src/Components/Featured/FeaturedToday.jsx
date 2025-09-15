import "../../Styles/Galleries/featuredGallery.css"

function FeaturedToday(props) {
    return (
        <div className="gallery-element-div">
            <div className="image-container-div">
                <img src={props.featured.image} />
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--list ipc-lockup-overlay__icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><g fill="none"><path d="M0 0h24v24H0V0z"></path><path opacity=".87" d="M0 0h24v24H0V0z"></path></g><path d="M4 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm-3 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"></path></svg>
                    {props.featured.type}
                </span>
            </div>
            <div className="gallery-info-div">
                <span className="span-list-heading-text">{props.featured.heading}</span>
                <span className="span-link-list-text">{props.featured.linkText}</span>
            </div>
        </div>
    )
}

export default FeaturedToday