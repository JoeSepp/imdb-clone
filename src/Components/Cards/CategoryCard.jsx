import "../../Styles/Galleries/CategoryCard.css"

import placeholder from "../../Images/placeholder.png"

function CategoryCard(props){
    const {image, header} = props


    return(
        <div className="category-container">
            <img src={`${placeholder}`}></img>
            <span className="category-header"><span>{header}</span></span>
        </div>
    )
}


export default CategoryCard