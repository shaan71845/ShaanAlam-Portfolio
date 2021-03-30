import { useContext } from "react";
import { Context } from "../Context/GlobalState";
import dateformat from "dateformat";

const BlogPosts = () => {
  const { blog_posts } = useContext(Context);

  return (
    <section className="blog__posts">
      <div className="container">
        <h1>My latest Blog posts</h1>
        <div className="blog__grid">
          <div className="blog">
            <div className="blog__coverImg">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--8rX1-twi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png"
                alt="cover"
              />
            </div>
            <div className="blog__description">
              <h4>
                Setup your ReactJS + Tailwind CSS Project by creating a template
                🔥
              </h4>

              <div className="blog__desctiption__userDetails">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--qKigAiwd--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/535362/03e41ab5-f924-471d-ba4d-85dfd5a0b418.jpeg"
                  alt=""
                />
                <p>
                  Shaan Alam on{" "}
                  {dateformat("2021-01-30T12:08:40Z", "dddd, mmmm dS, yyyy")}
                </p>
              </div>
            </div>
          </div>

          <div className="blog">
            <div className="blog__coverImg">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--0LS18H0r--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/4unpx3dr1h1pvm44bxo4.png"
                alt="cover"
              />
            </div>
            <div className="blog__description">
              <h4>
                Here's how I made a real-time chatbox in ReactJS and Firebase
              </h4>

              <div className="blog__desctiption__userDetails">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--qKigAiwd--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/535362/03e41ab5-f924-471d-ba4d-85dfd5a0b418.jpeg"
                  alt=""
                />
                <p>
                  Shaan Alam on{" "}
                  {dateformat("2021-01-30T12:08:40Z", "dddd, mmmm dS, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
