import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import BlogPosts from "./BlogPosts";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <BlogPosts />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
