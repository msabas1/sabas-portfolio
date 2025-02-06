import Header from "../components/Header";
import Contact from "../components/Contact";

const Experience = () => {
  return (
    <>
    <Header />
        <div className="work-portfolio">
            <div className="work-container right-container">
                <img
                    src="/images/SkillStormIcon.png"
                    width={40}
                    height={40}
                />
                <div className="text-box">
                    <h2 className="headline-2">SkillStorm</h2>
                    <small>SOFTWARE ENGINEER IN TEST | JUNE 2024 <span>&#8212;</span> PRESENT </small>
                    <p className="text-white mt-3 mb-2 max-w-[60ch]">
                        At SkillStorm, I've achieved two certifications: <strong className="text-sky-300">'Java Certified Foundations Associate' and 'Certified Tester Foundation Level'. </strong>
                        I've received a Public Trust level clearance to support IT projects within the U.S. government to complete tasks related to test automation, web accessibility,
                        digitization, and quality assurance using Java, Spring Framework, Selenium/Cucumber, Maven, and more.
                    </p>
                        <span className="right-container-arrow"></span>
                </div>
            </div>

            <div className="work-container left-container">
                <img
                    src="/images/GEICOIcon.png"
                    width={40}
                    height={40}
                />
                <div className="text-box">
                    <h2 className="headline-2">GEICO</h2>
                    <small>ENGINEER II | DEC 2022 <span>&#8212;</span> MAR 2024</small>
                    <p className="text-white mt-3 mb-2 max-w-[60ch]">
                        After my first year, I was promoted to an Engineer II and worked for two teams: ECS Services and ECS Sales. Along with my previous responsibilities with developing business rules and resolving bug user stories
                        (using the same technologies), <strong className="text-sky-300">I learned Behavior-Driven Development (BDD) testing to improve upon both teams' testing designs. I converted 180+ ETM unit tests to BDD functional and
                        integration tests using Specflow .NET framework for 12+ API endpoints.</strong> I also supported release verifications using ADO and Splunk to ensure stable deployment to product environments.
                        <strong className="text-sky-300"> My experiences at GEICO helped
                        me create a strong foundation for professional software development practices and taught me the fundamentals to be an impactful software engineer.</strong>
                    </p>
                        <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="work-container right-container">
                <img
                    src="/images/GEICOIcon.png"
                    width={40}
                    height={40}
                />
                <div className="text-box">
                    <h2 className="headline-2">GEICO</h2>
                    <small>ENGINEER I | JAN <span>&#8212;</span> DEC 2022</small>
                    <p className="text-white mt-3 mb-2 max-w-[60ch]">
                        As an Engineer I at GEICO, <strong className="text-sky-300">I utilized C#, SQL, DuckCreek, and other technologies to maintain and develop .NET enterprise applications</strong> for the Enterprise Coverage Services (ECS) Team.
                        During my first year at GEICO, <strong className="text-sky-300">I developed 160+ business rules for Coverages with full code coverage unit testing</strong> to be consumed by other entities within GEICO IT. These business rules
                        would be called through a Coverages WebAPI that would trigger particular endpoints based on GEICO customers' requests, API endpoints that I also maintained and developed. Moreover,
                        I supported in resolving dozens of user stories marked as 'Failed Verification' through troubleshooting and debugging to ensure code quality for ECS team projects. In July 2022, I earned my
                        AZ-900 Azure Fundamentals Certification from Microsoft. <strong className="text-sky-300">My team utilized Azure DevOps for deployment, sprint planning, version control, and more, developing with agile methodology.</strong>
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>

            <div className="work-container left-container">
                <img
                    src="/images/LLNLIcon.png"
                    width={40}
                    height={40}
                />
                <div className="text-box">
                    <h2 className="headline-2">LLNL</h2>
                    <small>DATA ANALYST INTERN | JUNE <span>&#8212;</span> SEPT 2020</small>
                    <p className="text-white mt-3 mb-2 max-w-[60ch]">
                        During my time at Lawrence Livermore National Laboratory, I utilized MATLAB to support IR Spectroscopy research through data analytics.
                        Throughout the summer, <strong className="text-sky-300">I helped with organizing, parsing, and enhancing the visualization of thousands of data sets</strong> so that the team of
                        research scientists I was supporting could more effectively interpret their experimental results. <strong className="text-sky-300">I used built-in MATLAB computational methods, paired
                        with mathematical principles, to minimize outlier data; improving the accuracy of graphical visualizations and statistical reports that I created</strong> during
                        my time at LLNL. The research I contributed to would later be published in: <a href="https://onlinelibrary.wiley.com/doi/10.1002/prep.202100082" className="research__link" target="_blank" >
                            <em className="text-sky-300">'Experimental Investigation of the Thermal Decomposition Pathways and Kinetics of TATB by Isotopic Substitution'</em>.
                        </a>
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>
        </div>
        <Contact />
    </>
  )
}

export default Experience