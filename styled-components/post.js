import styled from "styled-components";
import { devices } from "../utils/utils";
import { motion } from 'framer-motion';

export const PostContainer = styled(motion.div)`
  cursor: pointer;
  background: linear-gradient(to bottom right, #222, #111);
  transition: all 0.8s;
  border: 1px solid transparent;

  :hover {
    border: 1px solid gray;
  }
`;

export const PostCoverImg = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
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

export const PostHeading = styled.div`
  padding: 0.8rem;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    font-size: 100%;
    font-family: "Josefin Sans", sans-serif;
    color: #fff;
  }
`;

export const PostUser = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    height: 20px;
    width: 20px;
    border-radius: 100%;
  }

  h4 {
    margin-left: 10px;
    color: #fff;
    font-weight: normal;
    font-family: "Raleway", sans-serif;
  }
`;

export const PostDescription = styled.div`
  padding: 0.8rem;

  p {
    color: #aaa;
    line-height: 1.6;
    font-family: "Raleway", sans-serif;

    @media ${devices.mobileL} {
      font-size: small;
    }
  }
`;
