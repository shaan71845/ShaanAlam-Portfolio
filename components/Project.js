import {
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  Link,
} from "../styled-components/project";
import { Play, LogoGithub } from "react-ionicons";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <img
          src="https://cdn.sanity.io/images/izpqy9cv/production/51577cf63044f4b699fd1eb680d9c21e540f8d6f-1280x896.jpg"
          alt="Project"
        />
      </ProjectImage>
      <ProjectDescription>
        <h1>Instagram Clone</h1>
        <h4>ReactJS, Firebase, Material UI</h4>
        <Link href="#!">
          <Play /> Live Demo
        </Link>
        <Link href="#!">
          <LogoGithub /> GitHub Repo
        </Link>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default Project;
