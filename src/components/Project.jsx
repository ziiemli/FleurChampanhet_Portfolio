import React from "react"

const Project = ({title, by, date, roles, srcMainImg, alt, href}) => {
    return (
        <article className="project">
            <h2 className="project__title">{title}</h2>
            <div className="project__byDate">
                <p className="project__byDate__by">{`By ${by},`}</p>
                <p className="project__byDate__date">{date}</p>
            </div>
            <p className="project__roles">{roles}</p>
            <img src={srcMainImg} alt={alt} />
            <a className="project__link" href={href}>
                LINK
            </a>
        </article>
    )
}

export default Project
