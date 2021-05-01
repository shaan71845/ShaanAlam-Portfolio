import styled from "styled-components";
import { devices } from "../utils/utils";

export const SkillsContainer = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;

    @media ${devices.mobileM} {
      font-size: 150%;
    }
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 3rem;
`;

export const Skill = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
    color: #fff;
    margin-bottom: 20px;

    @media ${devices.mobileM} {
      font-size: small;
    }
  }

  > div > span {
    margin-right: 20px;
  }
`;
