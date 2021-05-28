import { BlogSection, Container, BlogGrid } from "../styled-components/blogs";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import { motion } from "framer-motion";

const Blogs = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <BlogSection>
        <Container>
          <Sidebar />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Blog Posts
          </motion.h1>
          <BlogGrid
            variants={blogGridVariants}
            initial="hidden"
            animate="show"
          ></BlogGrid>
        </Container>
      </BlogSection>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEV_API_KEY,
    },
  });
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
