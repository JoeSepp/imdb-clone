import Header from "../Components/navbar/Header.jsx"
import Footer from "../Components/Footer.jsx"
import CelebHero from "../Components/Hero/CelebHero.jsx"


function Celeb() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="celeb">
                <div className="page-content-container">
                <CelebHero />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Celeb