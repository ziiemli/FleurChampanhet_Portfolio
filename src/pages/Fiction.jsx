import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Project from "../components/Project"

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
            <section className="category__project">
                <Project title="fhwe" by="fwef" date="fkbe" roles="fbekf" srcMainImg="/src/assets/Fiction/test.jpg" alt="flsje" href="fej"/>
            </section>
            <Footer />
        </div>
    )
}

export default Fiction
