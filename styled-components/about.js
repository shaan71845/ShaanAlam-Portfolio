import styled from "styled-components";
import { devices } from "../utils/utils";

export const Section = styled.section``;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 6rem 0;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
  }
`;

export const Col = styled.div`
  flex: 1;

  &:nth-child(1) {
    padding-top: 3rem;

    h1 {
      margin-bottom: 10px;
      color: #fff;
      font-family: "Josefin Sans", sans-serif;
      font-size: 200%;

      @media ${devices.tablet} {
        text-align: center;
      }
    }

    p {
      margin-top: 30px;
      color: #fff;
      line-height: 1.6;
      font-family: "Raleway", sans-serif;

      @media ${devices.tablet} {
        text-align: center;
      }

      @media ${devices.mobileM} {
        font-size: small;
      }
    }
  }

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    line-height: 1.6;

    @media ${devices.tablet} {
      justify-content: center;
    }

    img {
      height: 75%;

      @media ${devices.tablet} {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        object-fit: cover;
      }

      @media ${devices.mobileL} {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

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

export const Skills = styled.div`
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

export const EducationContainer = styled.div`
  margin: 0 0 100px 0;

  @media ${devices.tablet} {
    margin-top: 100px;
  }

  h1 {
    margin: 30px 0;
    text-align: center;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
  }

  ul {
    width: 50%;
    margin: auto;
    text-align: center;

    @media ${devices.tablet} {
      width: 100%;
    }

    li {
      margin: 30px 0;
      color: #fff;

      @media ${devices.mobileM} {
        font-size: small;
      }

      h4,
      p {
        margin: 10px 0;
        font-family: "Raleway", sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing: 2px;
      }
    }
  }
`;
