import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";
import styled from "styled-components";

const CodeSnippet = ({ code, language }) => {
  const [copyText, setCopyText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);

    setCopyText("Copied");
  };

  return (
    <Container>
      <Titlebar>
        <div className="titlebar-actions">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="copy-to-clipboard">
          <a href="#!" onClick={copyToClipboard}>
            {copyText}
          </a>
        </div>
      </Titlebar>
      <SyntaxHighlighter
        language={language}
        style={synthwave84}
        customStyle={{
          margin: "2em 0",
          fontFamily: "Fira Code, monospace",
          width: "100%",
          fontSize: "1em",
          margin: "auto",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Container>
  );
};

export default CodeSnippet;

const Container = styled.div`
  margin: 2em 0;
  border-radius: 10px;
  background: linear-gradient(rgb(42, 33, 57) 75%, rgb(52, 41, 79));
  padding: 3em 1em 1em 1em;
  position: relative;
`;

const Titlebar = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;
  display: flex;
  justify-content: space-between;
  width: 95%;

  .titlebar-actions {
    display: flex;

    .circle {
      height: 14px;
      width: 13px;
      border-radius: 100%;
      margin-right: 10px;

      &:nth-child(1) {
        background: #ff5f56;
        border: 1px solid #e0443e;
      }

      &:nth-child(2) {
        background: #ffbd2e;
        border: 1px solid #dea123;
      }

      &:nth-child(3) {
        background: #27c93f;
        border: 1px solid #1aab29;
      }
    }
  }

  .copy-to-clipboard {
    a {
      font-size: 0.8em;
      font-family: "Fira Code", monospace;
      text-decoration: none;
      padding: 0.5em 1em;
      transition: all 0.5s;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
