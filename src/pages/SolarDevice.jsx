import Header from "../components/Header";
import Contact from "../components/Contact";

const SolarDevice = () => {
  return (
    <>
        <Header />
        <div className="container">
            <h2 className="headline-2 mt-40">
                Solar Tracking Power Device
            </h2>
            <video className="portfolio-item-video" controls>
                    <source src="/videos/Solar Tracking Power Device - Team TTB.mp4" type="video/mp4"/>
            </video>

            <p className="text-white text-base mt-10 mr-5">
                The Solar Tracking Power Device aims to accomplish the maximizing of solar energy input using machine learning, motors,
                and photovoltaic resistors to accurately align the solar panel of the device towards the sun regardless of the season. Our team has
                designed and fabricated a working prototype that has two modes; the first mode tracks a light source and saves gathered data into a
                database while the second mode uses machine learning to predict the optimal angle for maximum energy input. While either mode
                takes place, the device charges a renewable AA battery that acts as a power device.
            </p>
            
            <p className="text-white text-base mt-10 mr-5">
                I worked on the hardware fabrication alongside another teammate, developed certain functionalities of the device, and 
                merged the software with the device. Specifically, I soldered the circuit to connect with the Raspberry Pi, implemented the voltage and battery
                charging functionalities, and troubleshooted the hardware to sync with the code. 
            </p>

            <p className="text-white text-base mt-10 mr-5">Here is a link to the project's Github <a href="https://github.com/basedmarv/Solar-Tracking-Power-Device" class="portfolio-item-link" target="_blank">repository</a>.</p> 
        </div>
        <Contact />
    </>
  )
}

export default SolarDevice