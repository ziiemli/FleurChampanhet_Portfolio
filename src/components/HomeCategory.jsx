import React from "react"
import {Link} from "react-router-dom"

const HomeCategory = ({to, img_M, img_D, title}) => {
    return (
        <div>
            <Link to={"/"}>
                <div>
                    <picture>
                        <source media="(min-width: 996px)" srcSet={img_D} />
                        <img src={img_M} alt={{to} + "category"} />
                    </picture>
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default HomeCategory
