import {
  SkillsContainer,
  SkillsWrapper,
  Skill,
} from "../styled-components/skills";
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

const Skills = () => {
  return (
    <SkillsContainer>
      <h1>My Skills and tools</h1>
      <SkillsWrapper>
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
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
