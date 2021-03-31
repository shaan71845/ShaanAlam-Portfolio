import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const HeroSection = () => (
  <>
    <Navbar />
    <section className="home" id="home">
      <div className="container">
        <Fade bottom>
          <img src="/images/me.png" alt="Shaan Alam" />
        </Fade>
        <Fade bottom>
          <h1 className="home__myName">Shaan Alam</h1>
        </Fade>
        <Fade bottom>
          <p>
            Hi there 👋️, I'm Shaan Alam. I am a Front-end Developer. I like to
            create amazing stuffs using JavaScript, ReactJS and Firebase. See
            some of my Projects below.
          </p>
        </Fade>
        <Fade bottom>
          <div className="home__actions">
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

export default HeroSection;
