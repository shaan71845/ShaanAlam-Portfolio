import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <section className="skills__section">
      <Fade top>
        <h1>Skills and Tools</h1>
      </Fade>
      <div className="container">
        <div className="skills__leftContainer">
          <Fade bottom>
            <div className="skill">
              <h4>Markup/Styling languages</h4>
              <img src="/images/html.svg" alt="HTML5" />
              <img src="/images/css.svg" alt="CSS3" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="skill">
              <h4>Programming Languages</h4>
              <img src="/images/javascript.svg" alt="JavaScript" />
              <img src="/images/python.svg" alt="Python" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="skill">
              <h4>Web frameworks/libraries</h4>
              <img src="/images/react.svg" alt="ReactJS" />
              <img src="/images/firebase.svg" alt="Firebase" />
            </div>
          </Fade>
        </div>

        <div className="skill__rightContainer">
          <Fade bottom>
            <div className="skill">
              <h4>State Management</h4>
              <img src="/images/redux.svg" alt="Redux" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="skill">
              <h4>Version Control System</h4>
              <img src="/images/git.svg" alt="Git" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="skill">
              <h4>Design tools</h4>
              <img src="/images/figma.svg" alt="Figma" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
