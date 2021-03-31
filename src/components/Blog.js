import dateformat from "dateformat";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

const Blog = ({ blog }) => {
  return (
    <Fade bottom>
      <a
        href={blog.url}
        target="_blank"
        rel="noreferrer"
        className="blog__link"
      >
        <motion.div className="blog" whileHover={{ scale: 1.1 }}>
          <div className="blog__coverImg">
            <img src={blog.cover_image} alt="cover" />
          </div>
          <div className="blog__description">
            <h4>{blog.title}</h4>

            <div className="blog__desctiption__userDetails">
              <img src="/images/me.png" alt="Shaan Alam" />
              <p>
                {blog.name} on{" "}
                {dateformat(blog.published_timestamp, "dddd, mmmm dS, yyyy")}
              </p>
            </div>
          </div>
        </motion.div>
      </a>
    </Fade>
  );
};

export default Blog;
