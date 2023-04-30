import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h2>Currency Exchange Today</h2>
      <div className="about-container">
        <h4>she codes; React Course Final Project</h4>
        <ul>
          <li>
            <p>
              Currency exchange rates of commonly used currencies are presented
            </p>
          </li>
          <li>
            <p>
              Clicking the flags in the navbar will expose the currency
              calculator from the chosen currency
            </p>
          </li>
          <li>
            {" "}
            <p>
              The trend of the currency compared to USD is presented in the
              homepage - reached by clicking the logo
            </p>
          </li>
          <li>
            {" "}
            <p>
              This app was created by Idil Kasuto Kelson as she codes; React
              Course final project
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
