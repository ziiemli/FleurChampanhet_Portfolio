import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Fiction = () => {
    return (
        <div>
            <section className="category__topPart">
                <Header />
                <div>
                    <div className="category__topPart__text">
                        <h1>FICTION</h1>
                        <p>PROJECTS</p>
                    </div>
                    <picture>
                        <source media="(min-width: 996px)" srcSet="/src/assets/Home/Home_Fiction_D.webp" />
                        <img className="homeCategory__img" src="/src/assets/Home/Home_Fiction_M.webp" alt="Fiction top" />
                    </picture>
                </div>
            </section>
            <section>
                <article>
                    <h2>Title</h2>
                    <p>By</p>
                    <p>date</p>
                    <p>roles</p>
                    <img src="" alt="" />
                    <a href="">LINK</a>
                </article>
            </section>
            <Footer />
        </div>
    )
}

export default Fiction
