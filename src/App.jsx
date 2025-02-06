import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./pages/Experience";
import SolarDevice from "./pages/SolarDevice";
import AtmosphereSystem from "./pages/AtmosphereSystem";
import MarioEmulator from "./pages/MarioEmulator";
import TetrisEmulator from "./pages/TetrisEmulator";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Hero />
                        <About />
                        <Technologies />
                        <Work />
                        <Project />
                        <Contact />
                    </>
                }/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/solar-device" element={<SolarDevice />}/>
                <Route path="/atmosphere-system" element={<AtmosphereSystem />}/>
                <Route path="/mario-emulator" element={<MarioEmulator />}/>
                <Route path="/tetris-emulator" element={<TetrisEmulator />}/>
            </Routes>
        </>
    )
}

export default App;