import {
  ProjectSection,
  Container,
  ProjectGrid,
} from "../styled-components/projects";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";
import sanityClient from "../client";

const Projects = ({ projects }) => {
  return (
    <ProjectSection>
      <Container>
        <Sidebar />
        <h1>Projects</h1>
        <ProjectGrid>
          {projects.map((project) => (
            <Project key={project.slug.current} project={project} />
          ))}
        </ProjectGrid>
      </Container>
    </ProjectSection>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"] {
    title,
    slug {
      current
    },
    author,
    live_link,
    github_link,
    mainImage {
      asset -> {
        url
      }
    }
  }`);

  return {
    props: {
      projects,
    },
  };
}
