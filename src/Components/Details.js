// React And Hooks
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import data from "./Data";
import code from "../imgs/code.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
// Extra Library

// Pages Section
import Fullinfo from "./Fullinfo";
import Footer from "./Footer";
// Pages Section

const Details = () => {
  // Course details
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(data);
  const [course, setCourse] = useState(null);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    const currentCourse = courses.filter(
      (courseState) => courseState.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  // Course details

  // Loading
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  const styles = {
    background: bg
      ? "linear-gradient(95deg, rgba(35, 185, 212, 0.6),  rgba(25, 107, 222, 0.7), rgba(13, 205, 222, 0.6))"
      : "rgba(0,0,0,0.3)",
  };
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 900);
  }, []);
  // Loading

  return (
    <>
      {course && (
        <motion.div
          className="coursedetails"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
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
              className="course-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="details">
                <div className="images">
                  <img src={course.devImg} alt="laptop" />
                  <img src={code} alt="laptop" />
                </div>
                <h1>
                  <FontAwesomeIcon className="info-icon" icon={faLaptopCode} />
                  {course.name2}
                </h1>
              </div>
              {course.fullInfos.map((info) => {
                return <Fullinfo info={info} key={course.id} />;
              })}
              <div className="promises">
                <div data-aos="zoom-in" className="promise">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi voluptatem labore non dicta similique aspernatur?
                  </h3>
                </div>
                <div data-aos="zoom-in" className="promise">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, laboriosam voluptatibus id numquam soluta alias?
                  </h3>
                </div>
              </div>
              <Footer />
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Details;
