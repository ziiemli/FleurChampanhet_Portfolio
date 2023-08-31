import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Fiction from "./pages/Fiction"
import Clip from "./pages/Clip"
import Pub from "./pages/Pub"
import Photo from "./pages/Photo"
import About from "./pages/About"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiction" element={<Fiction />} />
                <Route path="/clip" element={<Clip />} />
                <Route path="/pub" element={<Pub />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
