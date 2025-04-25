import TechnologiesCard from "./TechnologiesCard";
import { motion } from "motion/react";

const technologiesItem = [
  {
    imgSrc: '/images/python-original.svg',
    label: 'Python',
    desc: 'Backend'
  },
  {
    imgSrc: '/images/csharp-original.svg',
    label: 'C#',
    desc: 'Backend'
  },
  {
    imgSrc: '/images/dot-net-original.svg',
    label: '.NET',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/specflow-logo.png',
    label: 'SpecFlow',
    desc: 'BDD Testing'
  },
  {
    imgSrc: '/images/java-svgrepo-com.svg',
    label: 'Java',
    desc: 'Backend'
  },
  {
    imgSrc: '/images/selenium-svgrepo-com.svg',
    label: 'Selenium',
    desc: 'Automated Testing'
  },
  {
    imgSrc: '/images/cucumber-svgrepo-com.svg',
    label: 'Cucumber',
    desc: 'BDD Testing'
  },
  {
    imgSrc: '/images/maven-svgrepo-com.svg',
    label: 'Maven',
    desc: 'Build Management'
  },
  {
    imgSrc: '/images/spring-svgrepo-com.svg',
    label: 'Spring',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/postgresql-svgrepo-com.svg',
    label: 'Postgresql',
    desc: 'Database Management'
  },
  {
    imgSrc: '/images/jenkins-svgrepo-com.svg',
    label: 'Jenkins',
    desc: 'CI/CD'
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="section">
        <motion.div
          id="technologies-container"
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
            <h2 className="headline-2">
                My Technologies
            </h2>

            <p className="text-white mt-3 mb-8 max-w-[75ch]">
            Discover the powerful tools and technologies I use to build, maintain, and test software systems.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    technologiesItem.map(( { imgSrc, label, desc }, key) =>
                    (
                        <TechnologiesCard
                            key={key}    
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </motion.div>
    </section>
  )
}

export default Technologies