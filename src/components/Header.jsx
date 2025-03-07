import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">
            
            <h1>
                <a href="/" className="logo">
                    <motion.img
                        whileHover={{scale: 1.1}}
                        src="/images/MSLogo.png"
                        width={40}
                        height={40}
                        alt="Sabas Logo"
                    />
                </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            <motion.a
                whileHover={{scale: 1.05}}
                href="#contact"
                className="btn btn-secondary max-md:hidden md:justify-self-end">
                Contact Me
            </motion.a>
        
        </div>
    </header>
    )
}

export default Header