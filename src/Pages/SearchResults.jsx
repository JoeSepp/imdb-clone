import Header from "../Components/navbar/Header"
import Footer from "../Components/Footer"
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