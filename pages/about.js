import {
  Section,
  Container,
  Grid,
  Col,
  EducationContainer,
  SkillsContainer,
  Skills,
  Skill,
} from "../styled-components/about";
import Sidebar from "../components/Sidebar";
import {
  LogoHtml5,
  LogoCss3,
  LogoJavascript,
  LogoPython,
  LogoReact,
  LogoFirebase,
  LogoSass,
  LogoFigma,
  LogoGithub,
} from "react-ionicons";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";

const about = ({ about }) => {
  return (
    <Section>
      <Container>
        <Sidebar />
        <Grid>
          <Col>
            <h1>About me</h1>
            <BlockContent
              blocks={about.bio[0]}
              projectId={process.env.PROJECT_ID}
              dataset={process.env.DATASET}
            />
          </Col>
          <Col>
            <img
              src="https://shaanalam.vercel.app/images/me.png"
              alt="Shaan Alam"
            />
          </Col>
        </Grid>
        <EducationContainer>
          <h1>My Education</h1>
          <ul>
            <li>
              <div>
                <h4>BSc. Physical Science with Computer Science</h4>
                <h4>Shivaji College, University Of Delhi</h4>
                <p>2020 - PRESENT</p>
              </div>
            </li>
            <li>
              <div>
                <h4>St. Basil's School, Basti</h4>
                <p>2004 - 2020</p>
              </div>
            </li>
          </ul>
        </EducationContainer>
        <SkillsContainer>
          <h1>My Skills and tools</h1>
          <Skills>
            <Skill>
              <h4>Markup / Styling Languages</h4>
              <div>
                <LogoHtml5 color="#fff" />
                <LogoCss3 color="#fff" />
                <LogoSass color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Programming Languages</h4>
              <div>
                <LogoJavascript color="#fff" />
                <LogoPython color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Web Libraries / Framework</h4>
              <div>
                <LogoReact color="#fff" />
                <LogoFirebase color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Design</h4>
              <div>
                <LogoFigma color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Version Control System</h4>
              <div>
                <LogoGithub color="#fff" />
              </div>
            </Skill>
          </Skills>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

export default about;

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
