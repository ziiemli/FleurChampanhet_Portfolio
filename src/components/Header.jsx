import React from "react"
import {Link} from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
    return (
        <section className="header">
            <Link to="/">
                <img className="header__logo" src="/src/assets/Logo.svg" alt="Logo of Fleur Champanhet" />
            </Link>
            {/* <img className="header__burger" src="/src/assets/Burger.svg" alt="Burger Logo" /> */}
            <Menu/>
        </section>
    )
}

export default Header
