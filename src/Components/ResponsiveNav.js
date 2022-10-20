import React from "react";

// Extra Library
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Extra Library

const ResponsiveNav = () => {
  return (
    <motion.div
      className="reponsivenav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar">
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/coursespage">
          it courses
        </Link>
        <Link className="link" to="/aboutpage">
          it planet
        </Link>
        <Link className="link" to="/contactpage">
          contact us
        </Link>
        <Link className="link" to="/contactpage">
          sign in
        </Link>
      </div>
    </motion.div>
  );
};

export default ResponsiveNav;
