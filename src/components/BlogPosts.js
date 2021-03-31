import { useContext } from "react";
import { Context } from "../Context/GlobalState";
import Blog from "./Blog";
import Fade from "react-reveal/Fade";

const BlogPosts = () => {
  const { state } = useContext(Context);

  return (
    <section className="blog__posts">
      <div className="container">
        <Fade top>
          <h1>My latest Blog posts</h1>
        </Fade>
        <div className="blog__grid">
          {state &&
            state.blog_posts &&
            state.blog_posts.map((blog) => (
              <Blog blog={blog} key={blog.slug} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
