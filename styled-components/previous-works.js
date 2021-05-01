import styled from "styled-components";
import { devices } from "../utils/utils";

export const PWContainer = styled.div`
  margin: 100px 0;

  .experiences {
    display: flex;
    justify-content: space-around;

    @media ${devices.tabletL} {
      display: block;
    }
  }

  h1 {
    color: #fff;
    font-size: 200%;
    text-align: center;
    margin: 30px 0;
    font-family: "Josefin Sans", sans-serif;

    @media ${devices.mobileM} {
      font-size: 150%;
    }
  }

  .experience {
    padding: 2rem 4rem;
    background: #111;
    text-align: center;

    h3 {
      margin: 10px 0;
      color: #fff;
      font-family: "Josefin Sans", sans-serif;
    }

    p {
      margin: 10px 0;
      color: #fff;
      font-family: "Raleway", sans-serif;
    }
  }
`;
