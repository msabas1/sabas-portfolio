import Header from "../components/Header";
import Contact from "../components/Contact";

const MarioEmulator = () => {
  return (
    <>
        <Header />
        <div className="container">
            <h2 className="headline-2 mt-40">
                Super Mario Bros. Emulator
            </h2>
            <video className="portfolio-item-video" controls>
                    <source src="/videos/Super Mario Emulator Video.mp4" type="video/mp4"/>
            </video>

            <p className="text-white text-base mt-10 mr-5">
              I developed an Android Studio Emulator version of the beloved Super Mario Bros game in Java! Some notable elements related to the user interface are the animation of Mario characters and the real time movement of the player in conjunction with user input.
              For the back-end, notable elements were the interaction with the pipes, stairs and brick pieces. 
            </p>
        </div>
        <Contact />
    </>
  )
}

export default MarioEmulator