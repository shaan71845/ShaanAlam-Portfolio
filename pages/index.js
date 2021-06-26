import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import buttonStyles from "../styles/Button.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
import withTransition from "../HOC/withTransition";
import { slideUpVariants } from "../utils/variants";

const smallHeaderVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const smallHeaderCharVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const headerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerCharVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <div className={styles["small-header"]}>
          <motion.h5
            variants={smallHeaderVariant}
            initial="hidden"
            animate="visible"
          >
            {"Hey".split("").map((char) => (
              <motion.span variants={smallHeaderCharVariant}>
                {char}
              </motion.span>
            ))}
          </motion.h5>
        </div>
        <div className={styles["header"]}>
          <motion.h1
            variants={headerVariant}
            initial="hidden"
            animate="visible"
          >
            {"I'm Shaan Alam".split("").map((char) => (
              <motion.span variants={headerCharVariant}>{char}</motion.span>
            ))}
          </motion.h1>
        </div>
        <div className={styles["hero-text"]}>
          Front-End Developer, Programmer, Problem Solver
        </div>
        <div className={styles["hero-actions"]}>
          <Link href="/projects">
            <a className={buttonStyles["btn-primary"]}>My Projects</a>
          </Link>
          <a className={buttonStyles["btn-primary"]}>Download CV</a>
        </div>
      </div>
    </>
  );
};

export default withTransition(Home);
