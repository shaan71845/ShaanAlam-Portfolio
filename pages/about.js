import { Section, Container, Grid, Col } from "../styled-components/about";
import Sidebar from "../components/Sidebar";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import Education from "../components/Education";
import Skills from "../components/Skills";

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
        <Education />
        <Skills />
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
