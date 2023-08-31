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
                    <img className="header__burger menu__active__burger" src="/src/assets/Burger.svg" alt="Burger Logo" onClick={(e) => setMenu(!menu)} />
                    <div className="menu__active__nav">
                        <NavLink to="/">
                            <p className="menu__active__nav__part">HOME</p>
                            {/* {querystring && querystring === "home" ? <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" /> : <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" />} */}
                        </NavLink>
                        <div>
                            <p className="menu__active__nav__part">PROJECTS</p>
                            <NavLink to="/fiction">
                                <p className="menu__active__nav__subpart">FICTION</p>
                            </NavLink>
                            <NavLink to="/clip">
                                <p className="menu__active__nav__subpart">CLIP</p>
                            </NavLink>
                            <NavLink to="/pub">
                                <p className="menu__active__nav__subpart">PUB</p>
                            </NavLink>
                            <NavLink to="/photo">
                                <p className="menu__active__nav__subpart">PHOTO</p>
                            </NavLink>
                        </div>
                        <NavLink to="/about">
                            <p className="menu__active__nav__part">ABOUT</p>
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
