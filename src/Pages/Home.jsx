import Main from "../Components/Main.jsx"
import Header from "../Components/navbar/Header.jsx"
import Footer from "../Components/Footer.jsx"


function Home() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home