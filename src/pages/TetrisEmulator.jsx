import Header from "../components/Header";
import Contact from "../components/Contact";

const TetrisEmulator = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h2 className="headline-2 mt-40">
                    Tetris Emulator
                </h2>
                <video className="portfolio-item-video" controls>
                        <source src="/videos/Tetris Emulator Video.mp4" type="video/mp4"/>
                </video>
    
                <p className="text-white text-base mt-10 mr-5">
                    I developed an Android Studio Emulator version of Tetris in Java, designing functions for both the front and back end such as the spawning and creation of shapes,
                    score count, game over, movements (left and right), shape acceleration, and the user aspect of these mechanics.
                </p>
            </div>
            <Contact />
        </>
      )
}

export default TetrisEmulator