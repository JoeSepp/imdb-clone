import "../Styles/LoadingComponent.css"

function LoadingComponent() {


    return (
        <div className="loading-component-grid">
            <svg className="circle-loader" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" />
            </svg>
            <svg className="circle-loader" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" />
            </svg>
            <svg className="circle-loader" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" />
            </svg>
        </div>

    )
}

export default LoadingComponent