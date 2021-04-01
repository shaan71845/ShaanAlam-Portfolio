import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="hero__section" id="home">
        <div className="container">
          <header>
            <Fade>
              <h4>Hi there 👋️, I'm</h4>
            </Fade>
            <Fade bottom>
              <h1>Shaan Alam</h1>
            </Fade>
            <Fade bottom>
              <p>
                I am a Front-end Developer. I like to create amazing stuffs
                using JavaScript. See some of my projects below!!
              </p>
            </Fade>
          </header>
          <Fade top>
            <div className="hero__actions">
              <a href="#projects" className="btn__primary">
                Projects
              </a>
              <a
                href="https://github.com/shaan71845/python_notes/files/6216889/CV.Shaan.Alam.pdf"
                className="btn__primary"
              >
                Download CV
              </a>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
