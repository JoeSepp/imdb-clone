import "../../Styles/Galleries/CategoryCard.css"


function CategoryCard(props){
    const {image, header} = props


    return(
        <div className="category-container">
            <img src='src\Images\placeholder.png'></img>
            <span className="category-header"><span>{header}</span></span>
        </div>
    )
}


export default CategoryCard