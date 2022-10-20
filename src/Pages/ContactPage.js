// React And Hooks
import React, { useEffect, useState } from "react";
// React And Hooks

// Extra Library
import { useHistory, Link } from "react-router-dom";
import { motion } from "framer-motion";
// Extra Library

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faUser,
  faEnvelope,
  faX,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Pages Section
import ResponsiveNav from "../Components/ResponsiveNav";
// Pages Section

const ContactPage = () => {
  const history = useHistory();
  // Loading
  const [bg, setBg] = useState(false);
  const [loading, setLoading] = useState(false);
  const style = {
    background: bg ? "" : "rgba(0,0,0,0.6)",
  };
  // "linear-gradient(95deg, rgba(35, 185, 212, 0.6),  rgba(25, 107, 222, 0.7), rgba(13, 205, 222, 0.6))"
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 800);
  }, []);
  // Loading

  const [menu, setMenu] = useState(false);

  return (
    <>
      {loading ? (
        <div style={style} className="container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        <div className="contactpage">
          <div style={style} className="contact">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
            >
              <h1>IT Planet</h1>
              <div className="nav-menu">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/coursespage">
                  IT Courses
                </Link>
                <Link className="nav-link" to="/aboutpage">
                  IT Planet
                </Link>
                <Link className="nav-link" to="/contactpage">
                  Contact Us
                </Link>
              </div>
              <div className="icons">
                {menu ? (
                  <FontAwesomeIcon
                    onClick={() => setMenu(!menu)}
                    icon={faX}
                    className="close-menu"
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => setMenu(!menu)}
                    icon={faBars}
                    className="open-menu"
                  />
                )}
              </div>
            </motion.nav>
            {menu ? <ResponsiveNav /> : ""}

            <motion.div
              className="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.4,
                delay: 1.5,
              }}
            >
              <h2>
                get in <span>touch</span>
              </h2>
              <form>
                <div>
                  <FontAwesomeIcon className="input-icon" icon={faUser} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>
              </form>
              <motion.div
                className="btn"
                initial={{ y: 250 }}
                animate={{ y: 30 }}
                transition={{
                  duration: 1.8,
                  delay: 2,
                  type: "spring",
                  stiffness: 110,
                }}
              >
                <button type="submit">
                  <FontAwesomeIcon className="info-icon" icon={faChevronLeft} />
                  submit
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
