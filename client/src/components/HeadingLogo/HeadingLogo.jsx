import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import EscapadeLogo from '../../images/EscapadeLogo.jpeg';
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./HeadingLogo.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },
  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const HeadingLogo = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      // Start the Typed animation when the component mounts
      typedRef.current.start();
    }
  }, []);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2>Welcome To</h2>
        <h1>ESCAPADE</h1>
        <p style={{ fontSize: "1.2rem ", fontWeight: "600" }}>
          <span style={{ marginLeft: "8px" }}>
          <ReactTyped
    startWhenVisible
    strings={[
      "An event organised by <strong>ECE Department of MCKVIE </strong>,Where Boundaries Fade and Memories are made!",
    ]}
    typeSpeed={50}
  />
          </span>
        </p>
        <Link
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          {/* Button or any other content you want to add */}
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={EscapadeLogo} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default HeadingLogo;
