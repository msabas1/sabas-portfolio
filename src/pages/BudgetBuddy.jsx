import Header from "../components/Header";
import Contact from "../components/Contact";

const BudgetBuddy = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h2 className="headline-2 mt-40">
                    Budget Buddy
                </h2>
    
                <p className="text-white text-base mt-10 mr-5">
                  I supported the development of the Budget Buddy Test Suite for the frontend aspects of the financial budget web application.
                  Using the Page Object Model design pattern, I created Cucumber and Selenium tests with accompanying feature files to complete
                  test automation with Behavior-driven development.
                </p>

                <p className="text-white text-base mt-10 mr-5">
                    Here is the link to the Github repository to the front end testing: <a href="https://github.com/My-Budget-Buddy/Budget-Buddy-Frontend-Testing" className="portfolio-item-link">Budget Buddy Frontend Testing</a>
                </p>
            </div>
            <Contact />
        </>
      )
}

export default BudgetBuddy