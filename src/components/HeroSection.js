import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="hero__section" id="home">
        <div className="container">
          <main>
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
              <Fade top>
                <div className="hero__actions">
                  <Link
                    to="projects"
                    className="btn__primary"
                    smooth={true}
                    duration={1000}
                  >
                    My Projects
                  </Link>
                  <a
                    href="https://github.com/shaan71845/python_notes/files/6216889/CV.Shaan.Alam.pdf"
                    className="btn__primary"
                  >
                    Download CV
                  </a>
                </div>
              </Fade>
            </header>

            <div className="social-icons">
              <Fade>
                <a
                  href="https://www.instagram.com/__shaanalam__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </Fade>
              <Fade>
                <a
                  href="https://www.linkedin.com/in/shaan-alam-01784018a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Fade>
              <Fade>
                <a
                  href="https://twitter.com/shaancodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </Fade>
              <Fade>
                <a
                  href="https://github.com/shaan71845"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </Fade>
            </div>
          </main>
          <div className="scroll__text">
            <div className="line"></div>
            <h3>Scroll Down</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
