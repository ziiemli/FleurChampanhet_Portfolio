import React from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"

const Menu = () => {
    //menu is active ?
    const [menu, setMenu] = useState(false)

    //diamond selected page active?
    const querystring = window.location.pathname.split("/").join("")

    //no scroll when menu is open
    //select body tag
    const bodyContent = document.querySelector("body")
    //if menu false > remove overflow = hidden to body tag
    if (!menu) {
        bodyContent && bodyContent.classList.remove("bodyOverflow")
    }
    //if menu true > add overflow = hidden to body tag
    else {
        bodyContent && bodyContent.classList.add("bodyOverflow")
    }

    return (
        <div>
            <img className="header__burger" src="/src/assets/Burger.svg" alt="Burger Logo" onClick={(e) => setMenu(!menu)} />
            {menu && (
                <section className="menu__active">
                    <img className="header__burger" src="/src/assets/Burger.svg" alt="Burger Logo" onClick={(e) => setMenu(!menu)} />
                    <div className="menu__active__nav">
                        <NavLink to="/">
                            <p>HOME</p>
                            {/* {querystring && querystring === "home" ? <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" /> : <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" />} */}
                        </NavLink>
                        <div>
                            <p>PROJECTS</p>
                            <NavLink to="/fiction">
                                <p>FICTION</p>
                            </NavLink>
                            <NavLink to="/clip">
                                <p>CLIP</p>
                            </NavLink>
                            <NavLink to="/pub">
                                <p>PUB</p>
                            </NavLink>
                            <NavLink to="/photo">
                                <p>PHOTO</p>
                            </NavLink>
                        </div>
                        <NavLink to="/about">
                            <p>ABOUT</p>
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
