import { motion } from "motion/react";

const aboutItems = [
    {
      label: 'Enterprise systems supported',
      number: 2
    },
    {
      label: 'Years of experience',
      number: 3
    },
    {
      label: 'Projects completed',
      number: 25
    }
  ];

const About = () => {
  return (
    <section id="about" className="section">
        <motion.div
          className="container"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            margin: "-100px"
          }}
        >
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-white mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
                Nice to meet you, I'm Marvin Neil Sabas! I am a software engineer with experience in building, maintaining, and testing software systems primarily using object-oriented languages.
                I am proficient in C#/.NET and Java/Spring. I've utilized HTML/CSS/JS using React framework for the frontend and Postgresql and SQL for database management.
                </p>

                <p className="text-white mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
                Additionally, I have software testing experience using Selenium and Cucumber, TestNG/Junit, Mockito, and JMeter.
                For deployment I have familiarity with Azure DevOps, AWS, Jenkins, Docker, and Kubernetes.
                My goal is to continue gaining professional experience developing software, exposing myself to more technologies and enhancing the knowledge I have.
                I work well with others and am experienced in solving problems within teams of different sizes. 
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl md:text-4xl font-semibold">{number}</span>
                                    <span className="text-cyan-300 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-white">{label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default About