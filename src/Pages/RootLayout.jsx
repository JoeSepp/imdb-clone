import { Outlet } from "react-router-dom"
import Header from "../Components/navbar/Header.jsx"
import Footer from "../Components/Footer.jsx"

function RootLayout() {


    return (
        <div className="root-layout">
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default RootLayout