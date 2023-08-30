import React from "react"
import {NavLink} from "react-router-dom"

const HomeCategory = ({to, img_M, img_D, title}) => {
    return (
        <article className="homeCategory">
            <NavLink to={"/" + to} >
                <picture>
                    <source media="(min-width: 996px)" srcSet={img_D} />
                    <img className="homeCategory__img" src={img_M} alt={to + " category"} />
                </picture>
                <h2>{title}</h2>
            </NavLink>
        </article>
    )
}

export default HomeCategory
