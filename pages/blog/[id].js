import styles from "../../styles/BlogArticle.module.scss";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "highlight.js/styles/shades-of-purple.css";
import Highlight from "react-highlight";
import rehypeHighlight from "rehype-highlight";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import monokaiSublime from "react-syntax-highlighter/dist/cjs/styles/prism/dark";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("shell", bash);

const CodeSnippet = ({ code, language }) => {
  return (
    <div className="rounded overflow-hidden mb-8">
      <div className="flex items-center px-4 py-2 bg-dark-light">
        {/* <div className="flex-grow font-mono text-base">{fileName}</div> */}
      </div>
      <div className="">
        <SyntaxHighlighter
          language={language}
          style={monokaiSublime}
          showLineNumbers
          wrapLines
          customStyle={{}}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const Post = ({ post }) => {
  console.log(post);

  const renderers = {
    code: function CS({ language, value }) {
      return <CodeSnippet language={language} code={value} />;
    },
  };

  return (
    <div className={styles.container}>
      <header>
        <img src={post.cover_image} alt={post.title} />
        <h1>{post.title}</h1>
      </header>
      <div className={styles.body}>
        <ReactMarkdown
          className="md-content"
          renderers={renderers}
          linkTarget="_blank"
        >
          {post.body_markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const res = await fetch(`https://dev.to/api/articles/${context.params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEV_API_KEY,
    },
  });
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}
