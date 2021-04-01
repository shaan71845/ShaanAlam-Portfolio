import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import BlogPosts from "./BlogPosts";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <HeroSection />
      <AboutMe />
      <Education />
      <Projects />
      <BlogPosts />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
