import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <section className="header">
            <Link to="/">
                <img src="/src/assets/Logo.svg" alt="Logo of Fleur Champanhet" />
            </Link>
            <img src="/src/assets/Burger.svg" alt="Burger Logo" />
        </section>
    )
}

export default Header
