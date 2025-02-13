import { ButtonPrimary, ButtonOutline } from "./Button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="welcome" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-2">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img
                            src="/images/sabas-banner.jpg"
                            width={40}
                            height={40}
                            alt="Marvin Sabas portrait"
                            className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-white text-xs tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">
                            </span>
                        </span>
                        <p className="text-white text-sm tracking-wide">SDET @ SkillStorm</p>
                    </div>
                </div>

                <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                    Building, Maintaining, & Testing Software Systems
                </h2>
                <motion.div whileHover={{scale: 1.01}} className="flex items-center gap-3">
                    <ButtonPrimary 
                        href="#about"
                        label="See more"
                        icon="arrow_downward"
                    />
                </motion.div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[350px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40
                    to-65% rounded-[60px] overflow-hidden">
                    <img
                        src="/images/sabas-banner.jpg"
                        width={656}
                        height={800}
                        alt="Hero Banner"
                        className="w-full"
                    />
                </figure>
            </div>

        </div>
    </section>
  )
}

export default Hero