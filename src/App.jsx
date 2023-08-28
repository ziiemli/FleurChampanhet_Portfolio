import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Fiction from "./pages/Fiction"
import Clip from "./pages/Clip"
import Pub from "./pages/Pub"
import Photo from "./pages/Photo"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Fiction />} />
                <Route path="/" element={<Clip />} />
                <Route path="/" element={<Pub />} />
                <Route path="/" element={<Photo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
