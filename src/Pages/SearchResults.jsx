import Header from "../Components/navbar/Header.jsx"
import Footer from "../Components/Footer.jsx"
import SearchPageComponent from "../Components/Search_page/SearchPageComponent"

function SearchResults() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="movie">
                <SearchPageComponent/>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}


export default SearchResults