import React from "react"
import {Link} from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
    return (
        <section className="header">
            <Link className="header__logo" to="/">
                <img className="header__logo__img" src="/src/assets/Logo.svg" alt="Logo of Fleur Champanhet" />
            </Link>
            <Menu/>
        </section>
    )
}

export default Header
