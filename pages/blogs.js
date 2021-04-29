import { BlogSection, Container, BlogGrid } from "../styled-components/blogs";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

const Blogs = ({ posts }) => {
  return (
    <BlogSection>
      <Container>
        <Sidebar />
        <h1>Blog Posts</h1>
        <BlogGrid>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?username=shaan71845");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
