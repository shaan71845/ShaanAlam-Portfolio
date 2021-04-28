import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Fade>
          <h2>Connect with me on</h2>
        </Fade>
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

      <Fade>
        <div className="mark">
          <p>Made with ❤️ by Shaan Alam</p>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
