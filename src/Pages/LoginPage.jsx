import Footer from "../Components/Footer.jsx"
import Header from "../Components/navbar/Header.jsx"
import LoginHero from "../Components/Hero/LoginHero.jsx"

function LoginPage() {


    return (
        <>
            <div>
                <Header />
            </div>
            <div className="login-hero">
                <LoginHero />
            </div>
            <div>
                <Footer/>
            </div>

        
        </>
    )
}

export default LoginPage