import "../../Styles/Header/HamburgerMenu.css"
import CategoryContainer from "./CategoryContainer.jsx"
import HamburgerMenuExpanded from "./HamburgerMenuExpanded.jsx"

import placeholder from "../../Images/placeholder.png"
import hamburgermenuImg from "../../Images/hamburger-menu.png"
import { useState } from "react"

function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function handleMenuOpening() {
        setIsOpen(true)
    }

    return (
        <div>
            <div className="header-top-left-menu">
                <button className="hamburger-menu hamburger-menu--mobile" onClick={handleMenuOpening}>
                    <div className="hamburger-menu_button hamburger-menu_button--mobile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--menu ipc-responsive-button__icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
                    </div>
                </button>
                <div className="database-logo-div">
                    <a href="/">
                        <img src={`${placeholder}`} width={64} />
                    </a>
                </div>
                <button className="hamburger-menu" onClick={handleMenuOpening}>
                    <div className="hamburger-menu_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--menu ipc-responsive-button__icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
                        <span className="hb__menu-text">Menu</span>
                    </div>
                </button>
            </div>
            {isOpen && <HamburgerMenuExpanded setIsOpen={setIsOpen} />}
        </div>

    )
}


export default HamburgerMenu