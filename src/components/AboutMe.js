import { useContext } from "react";
import { Context } from "../Context/GlobalState";
import BlockContent from "@sanity/block-content-to-react";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  const { state } = useContext(Context);

  return (
    <section className="aboutme" id="about-me">
      <div className="container">
        <div className="aboutme__leftContainer">
          <div className="aboutme__text">
            <Fade left>
              <h1>About me</h1>
            </Fade>
            <Fade left>
              <>
                {state && state.author !== undefined ? (
                  <BlockContent
                    blocks={state?.author.about}
                    projectId={process.env.REACT_APP_PROJECT_ID}
                    dataset={process.env.REACT_APP_DATASET}
                  />
                ) : null}
              </>
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className="aboutme__rightContainer">
            <img src="images/me.png" alt="Shaan Alam" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutMe;
