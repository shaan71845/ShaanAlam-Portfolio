import { useEffect, useRef } from "react";
import {
  HomeSection,
  Col,
  SocialIcons,
  Typing,
} from "../styled-components/index";
import {
  LogoLinkedin,
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
} from "react-ionicons";
import Sidebar from "../components/Sidebar";
import sanityClient from "../client";
import { init } from "ityped";

const Home = ({ about }) => {
  const typingRef = useRef();

  useEffect(() => {
    init(typingRef.current, {
      strings: [
        "Frontend Developer",
        "Web Designer",
        "Problem Solver",
        "Geek",
        "React Lover ❤️",
      ],
    });
  }, []);

  return (
    <HomeSection>
      <Col>
        <Sidebar />
        <h3>Hi there, I'm</h3>
        <h1>Shaan Alam</h1>
        <Typing>
          <h2>I am a</h2>
          <h2>
            <span ref={typingRef}></span>
          </h2>
        </Typing>
        <SocialIcons>
          <a href="#!">
            <LogoInstagram color="#FFF" />
          </a>
          <a href="#!">
            <LogoGithub color="#FFF" />
          </a>
          <a href="#!">
            <LogoLinkedin color="#FFF" />
          </a>
          <a href="#!">
            <LogoTwitter color="#FFF" />
          </a>
        </SocialIcons>
      </Col>
      <Col>
        <img src={about.image.asset.url} alt={about.name} />
      </Col>
    </HomeSection>
  );
};

export default Home;

export async function getStaticProps() {
  const about = await sanityClient.fetch(`*[_type == "author"] {
    name,
    bio,
    image {
      asset -> {
        url
      }
    }
  }[0]`);

  return {
    props: {
      about,
    },
  };
}
