//  React And Hooks
import React, { useEffect } from "react";
//  React And Hooks

// Extra Library
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useHistory } from "react-router-dom";
// Extra Library

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Pages Section

// Pages Section

const Course = ({ lessons }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const history = useHistory();
  return (
    <div className="containers">
      <h3 data-aos="zoom-in">Upcoming Courses</h3>
      <div className="course-cards">
        <div data-aos="fade-right" className="card">
          <Link to="/coursespage/frontend">
            <img src={lessons[0].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[0].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/frontend");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>

        <div data-aos="zoom-in" className="card">
          <Link to="/coursespage/backend">
            <img src={lessons[1].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[1].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/backend");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>

        <div data-aos="fade-left" className="card">
          <Link to="/coursespage/ios">
            <img src={lessons[2].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[2].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/ios");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>

        <div data-aos="fade-right" className="card">
          <Link to="/coursespage/android">
            <img src={lessons[3].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[3].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/android");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>

        <div data-aos="zoom-in" className="card">
          <Link to="/coursespage/nodejs">
            <img src={lessons[4].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[4].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/nodejs");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>

        <div data-aos="fade-left" className="card">
          <Link to="/coursespage/javascript">
            <img src={lessons[5].devImg} alt="developer" />
          </Link>
          <div className="info">
            <h2>{lessons[5].name}</h2>
            <button
              onClick={() => {
                history.push("/coursespage/javascript");
              }}
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Course;
