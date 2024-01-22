import React from "react"
import Header from "../components/Header"
import HomeCategory from "../components/HomeCategory"
import Data from "../data/data.json"

const Home = () => {
    const dataCategories = Data.homeCategories

    return (
        <main className="home">
            <section className="home__top">
                <Header />
                <picture className="home__fleur">
                    <source media="(min-width: 996px)" srcSet={"/src/assets/Home/Home_D.jpg"} />
                    <img src={"/src/assets/Home/Home_Mobile.jpg"} alt="Fleur Champanhet" />
                </picture>
                <div className="home__top__name">
                    <h1>
                        <strong>FLEUR</strong>
                        <strong>CHAMPANHET</strong>
                    </h1>
                    <p>GAFFER</p>
                    <a className="home__top__name__discover" href="#discover">DISCOVER</a>
                </div>
            </section>
            <section className="home__categories" id="discover">
                {dataCategories && dataCategories.map((category, index) => <HomeCategory to={category.to} img_M={category.img_M} img_D={category.img_D} title={category.title} key={index} />)}
            </section>
        </main>
    )
}

export default Home
