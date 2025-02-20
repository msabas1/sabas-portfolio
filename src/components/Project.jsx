import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const projects = [
    {
      imgSrc: '/images/BudgetBuddy.png',
      title: 'Budget Buddy',
      tags: ['Test Automation', 'BDD'],
      projectLink: 'budget-buddy'
    },
    {
      imgSrc: '/images/WarehouseFleetItemTable.png',
      title: 'Inventory Management',
      tags: ['Full Stack', 'Web App'],
      projectLink: 'https://github.com/msabas1/Project-1'
    },
    {
      imgSrc: '/images/SolarDevice.jpg',
      title: 'Solar Tracking Power Device',
      tags: ['Machine Learning', 'Hardware'],
      projectLink: '/solar-device'
    },
    {
      imgSrc: '/images/AtmosphereLogo.JPG',
      title: 'Atmosphere Monitoring System',
      tags: ['Rasberry Pi', 'IoT'],
      projectLink: '/atmosphere-system'
    },
    {
      imgSrc: '/images/SuperMario.jpg',
      title: 'Super Mario Bros. Emulator',
      tags: ['Java', 'Android'],
      projectLink: '/mario-emulator'
    },
    {
      imgSrc: '/images/TetrisThumbnail.jpg',
      title: 'Tetris Emulator',
      tags: ['Java', 'Android'],
      projectLink: '/tetris-emulator'
    }
  ];

const Project = () => {
  return (
    <section id="projects" className="section">
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
            <h2 className="headline-2">
                Completed Projects
            </h2>

            <p className="text-zinc-100 mt-3 mb-8 max-w-[60ch]">
            See the variety of different projects I've completed below.
            </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {projects.map(({ imgSrc, title, tags, projectLink }, key) =>
              (
                  <ProjectCard 
                      key={key}
                      imgSrc={imgSrc}
                      title={title}
                      tags={tags}
                      projectLink={projectLink}
                  />
              ))}
          </div>
      </motion.div>
    </section>
  )
}

export default Project