import {
  ProjectSection,
  Container,
  ProjectGrid,
} from "../styled-components/projects";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";

const Projects = () => {
  return (
    <ProjectSection>
      <Container>
        <Sidebar />
        <h1>Projects</h1>
        <ProjectGrid>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectGrid>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
