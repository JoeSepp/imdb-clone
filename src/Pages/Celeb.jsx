import Header from "../Components/navbar/Header"
import Footer from "../Components/Footer.jsx"
import CelebHero from "../Components/CelebHero.jsx"


function Celeb() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="celeb">
                <CelebHero />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Celeb