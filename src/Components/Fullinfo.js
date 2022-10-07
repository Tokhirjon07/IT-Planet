// React And Hooks
import React, { useState } from "react";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLanguage,
  faLocationDot,
  faCalendarDays,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import { useHistory } from "react-router-dom";
// Extra Library

// Pages Section
import Register from "../Components/Register";
// Pages Section

const Fullinfo = ({ info }) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  return (
    <div className="details detail">
      {modal ? <Register modal={modal} setModal={setModal} /> : ""}

      <h4>
        <FontAwesomeIcon className="info-icon" icon={faGlobe} />
        {info.status}
      </h4>
      <h4>
        <FontAwesomeIcon className="info-icon" icon={faLanguage} />
        {info.lang}
      </h4>
      <h4>
        <FontAwesomeIcon className="info-icon" icon={faLocationDot} />
        {info.country}
      </h4>
      <h4>
        <FontAwesomeIcon className="info-icon" icon={faCalendarDays} />
        {info.date}
      </h4>
      <div className="btn">
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          <FontAwesomeIcon className="info-icon" icon={faChevronLeft} />
          Home
        </button>
        <button
          onClick={() => {
            history.push("/coursespage");
          }}
        >
          <FontAwesomeIcon className="info-icon" icon={faChevronLeft} />
          Courses
        </button>

        <button
          onClick={() => {
            history.push("/contactpage");
          }}
        >
          <FontAwesomeIcon className="info-icon" icon={faChevronLeft} />
          Contact
        </button>
        <button onClick={() => setModal(!modal)}>
          <FontAwesomeIcon className="info-icon" icon={faChevronLeft} />
          Register
        </button>
      </div>
    </div>
  );
};

export default Fullinfo;
