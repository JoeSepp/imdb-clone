import "../../Styles/Header/Header.css"
import SearchBar from "./Searchbar.jsx"
import HamburgerMenu from "./HamburgerMenu.jsx"
import LoginSection from "./LoginSection.jsx"
import { use, useState } from "react"

// const API_KEY = "1733150386461833310579fe093e0326"

function Header() {
    return (
        <nav className="nav-header">
            <div className="navbar-inner">
                <HamburgerMenu />
                <SearchBar />
                <LoginSection />
            </div>
        </nav>
    )
}

export default Header