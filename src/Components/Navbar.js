import React from "react";

// Extra Library
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Extra Library

const Navbar = () => {
  return (
    <motion.div
      className="nav"
      initial={{ y: -250 }}
      animate={{ y: 60 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 110 }}
    >
      <nav>
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link leftline" to="/coursespage">
          it courses
        </Link>
        <Link className="link leftline" to="/aboutpage">
          it planet
        </Link>
        <Link className="link leftline" to="/contactpage">
          contact us
        </Link>
        <Link className="link leftline" to="/contactpage">
          sign in
        </Link>
      </nav>
    </motion.div>
  );
};

export default Navbar;
