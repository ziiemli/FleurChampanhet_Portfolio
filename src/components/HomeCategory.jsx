import React from "react"
import {NavLink} from "react-router-dom"

const HomeCategory = ({to, img_M, img_D, title}) => {
    return (
        <NavLink className="nav" to={"/" + to}>
            <article className="homeCategory">
                <picture>
                    <source media="(min-width: 996px)" srcSet={img_D} />
                    <img className="homeCategory__img" src={img_M} alt={to + " category"} />
                </picture>
                <h2>{title}</h2>
            </article>
        </NavLink>
    )
}

export default HomeCategory
