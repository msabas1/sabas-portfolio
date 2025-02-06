import Header from "../components/Header";
import Contact from "../components/Contact";

const AtmosphereSystem = () => {
  return (
    <>
        <Header />
        <div className="container">
            <h2 className="headline-2 mt-40">
                Atmosphere Monitoring System
            </h2>
            <video className="portfolio-item-video" controls>
                    <source src="/videos/Atmosphere Monitoring System Video.mp4" type="video/mp4"/>
            </video>

            <p className="text-white text-base mt-10 mr-5">
              I developed a Raspberry Pi based IoT device to implement an Atmosphere Monitoring System.
              The data gathered from my monitoring system is used to decide on how much water is needed to irrigate 
              and “turn on” a virtual sprinkler system. Every minute, local temperature and humidity values are gathered and 
              every three hours information from the CIMIS (California Irrigation Management Information System) website is parsed.
              The information is processed and several computations occur to determine how long the sprinkler system
              irrigates. 
            </p>
        </div>
        <Contact />
    </>
  )
}

export default AtmosphereSystem