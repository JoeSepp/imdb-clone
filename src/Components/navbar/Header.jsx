import "../../Styles/Header/Header.css"
import SearchBar from "./Searchbar.jsx"
import HamburgerMenu from "./HamburgerMenu.jsx"
import LoginSection from "./LoginSection.jsx"
import { use, useState } from "react"



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