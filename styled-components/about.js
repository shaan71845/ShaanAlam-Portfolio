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

