// React And Hooks
import React, { useEffect, useState } from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
// Extra Library

// Pages Section
import ResponsiveNav from "../Components/ResponsiveNav";
import Navbar from "../Components/Navbar";
// Pages Section

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 900);
  }, []);
  const styles = {
    background: bg ? "" : "rgba(0,0,0,0.5)",
  };

  const history = useHistory();
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {loading ? (
        <div style={styles} className="container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        <motion.div
          style={styles}
          className="home-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {menu ? <ResponsiveNav /> : ""}
          <div className="icons">
            {menu ? (
              <FontAwesomeIcon
                onClick={() => setMenu(!menu)}
                className="icon-close"
                icon={faX}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setMenu(!menu)}
                className="icon-menu"
                icon={faBars}
              />
            )}
          </div>
          {/* NAvbar Added */}
          <Navbar />
          {/* NAvbar Added */}
          <motion.div
            className="motto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1>
              Become A Developer With Us
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    `Front-End </>`,
                    `Back-End </>`,
                    `IOS </>`,
                    `Android </>`,
                  ],
                }}
              />
            </h1>
            <motion.div
              className="btn"
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button
                onClick={() => {
                  history.push("/coursespage");
                }}
              >
                get started <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;
