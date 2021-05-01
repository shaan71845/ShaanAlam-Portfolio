import styled from "styled-components";
import { devices } from "../utils/utils";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.div)`
  background: linear-gradient(to bottom right, #222, #111);
  transition: all 0.8s;
  border: 1px solid transparent;

  :hover {
    border: 1px solid gray;
  }
`;

export const ProjectImage = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: none;
    transition: all 0.8s;
  }

  :hover::before {
    box-shadow: inset 0px 0px 120px rgb(0, 0, 0);
  }
`;

export const ProjectDescription = styled.div`
  padding: 0.8rem;

  h1 {
    margin-top: 20px;
    font-family: "Raleway", sans-serif;
    color: #fff;

    @media ${devices.mobileL} {
      font-size: 100%;
    }
  }

  h4 {
    margin: 20px 0;
    font-weight: normal;
    font-family: "Josefin Sans", sans-serif;
    color: #fff;

    @media ${devices.mobileL} {
      font-size: 80%;
    }
  }
`;

export const Link = styled.a`
  color: #aaa;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  margin-right: 10px;
  transition: all 0.4s;

  @media ${devices.mobileL} {
    font-size: 80%;
  }

  :hover {
    color: #fff;

    span svg {
      fill: #fff;
    }
  }

  > span svg {
    vertical-align: middle;
    fill: #aaa;
  }
`;
