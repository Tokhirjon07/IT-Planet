// React And Hooks
import React, { useEffect } from "react";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGraduationCap,
  faPersonChalkboard,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
// Extra Library

const Benefit = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="benefits">
      <div className="card-benefits">
        <div data-aos="zoom-in" className="benefit">
          <h2>
            <FontAwesomeIcon className="benefit-icon" icon={faAward} />
            successfully graduated learners <span>1500</span>
          </h2>
        </div>
        <div data-aos="zoom-in" className="benefit">
          <h2>
            <FontAwesomeIcon className="benefit-icon" icon={faGraduationCap} />
            online platform which has students <span>2500</span>
          </h2>
        </div>
        <div data-aos="fade-right" className="benefit">
          <h2>
            <FontAwesomeIcon
              className="benefit-icon"
              icon={faPersonChalkboard}
            />
            high experienced and talented mentors <span>25</span>
          </h2>
        </div>
        <div data-aos="fade-left" className="benefit">
          <h2>
            <FontAwesomeIcon
              className="benefit-icon"
              icon={faFileCircleCheck}
            />
            job offers more than <span>300</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
