import "../../Styles/Header/HamburgerMenu.css"

function CategoryContainer(props) {

    const catList = props.list.map((elem, itr) => <li key={itr} >{elem}</li>)

    return (
        <div style={{ gridArea: props.grid }}>
            <div className="category-navbar-container">
                {props.icon}
                <span className="category-list">
                    <h2>{props.heading}</h2>
                    <ul>
                        {catList}
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default CategoryContainer