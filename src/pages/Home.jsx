import React from "react"
import Nav from "../components/Header"
import { Link } from "react-router-dom"
import HomeCategory from "../components/HomeCategory"

const Home = () => {
    return (
        <main>
            <Nav />
            <section className="home__top">
                <picture>
                    <source media="(min-width: 996px)" srcSet={"/src/assets/Home/Home_D.jpg"} />
                    <img src={"/src/assets/Home/Home_M.jpg"} alt="Logo of Ziiemli" />
                </picture>
                <div>
                    <h1>
                        <strong>FLEUR</strong>
                        <strong>CHAMPANHET</strong>
                    </h1>
                    <p>GAFFER</p>
                    <a href="">DISCOVER</a>
                </div>
            </section>
            <section>
                <HomeCategory to="fiction" img_M="/src/assets/Home/Home_Fiction_M.jpg" img_D="/src/assets/Home/Home_Fiction_D.jpg" title={"FICTION"}/>
                <HomeCategory to="clip" img_M="/src/assets/Home/Home_Fiction_M.jpg" img_D="/src/assets/Home/Home_Fiction_D.jpg" title={"FICTION"}/>
                <HomeCategory to="pub" img_M="/src/assets/Home/Home_Fiction_M.jpg" img_D="/src/assets/Home/Home_Fiction_D.jpg" title={"FICTION"}/>
                <HomeCategory to="photo" img_M="/src/assets/Home/Home_Fiction_M.jpg" img_D="/src/assets/Home/Home_Fiction_D.jpg" title={"FICTION"}/>
            </section>
        </main>
    )
}

export default Home
