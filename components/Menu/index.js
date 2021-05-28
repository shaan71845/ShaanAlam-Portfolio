import styled from "styled-components";
import Link from "next/link";
import {
  Wrapper,
  Container,
  LinkContainer,
  LinkContainerInner,
} from "./Menu.sc";
import { AnimatePresence, motion } from "framer-motion";

const menuLinkVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
  },
};

const menuVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

const Menu = () => {
  return (
    <Wrapper
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link href="/">Home</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/projects">Projects</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link href="/blogs">Blogs</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link href="/contact">Contact</Link>
          </LinkContainerInner>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Menu;
