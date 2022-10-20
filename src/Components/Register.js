// React And Hooks
import React, { useState, useEffect } from "react";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

const Register = ({ modal, setModal }) => {
  // Loading
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  const styles = {
    background: bg ? "" : "",
  };
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 800);
  }, []);
  // Loading

  return (
    <>
      {loading ? (
        <div className="container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        <div style={styles} className="register">
          <div className="form">
            <div className="title">
              <h2>Register new account</h2>
              <button onClick={() => setModal(!modal)}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <form>
              <div className="user-intro">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="last name"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="user-location">
                <div>
                  <input
                    type="text"
                    id="country"
                    placeholder="country"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="city"
                    placeholder="city"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="user-choosen-course">
                <div>
                  <select id="courses" name="courses">
                    <option value="front-end" selected>
                      which course ?
                    </option>
                    <option value="front-end">front end course</option>
                    <option value="back-end">back end course</option>
                    <option value="ios">ios course</option>
                    <option value="android">android course</option>
                    <option value="nodejs">node.js course</option>
                    <option value="javascript">javascript course</option>
                  </select>
                </div>
              </div>

              <div className="user-data">
                <div>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="phone number"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="register-confirm">
                <div className="reg-term">
                  <input type="checkbox" name="agree" id="agree" />
                  <p>
                    I agree to the <span>term and conditions.</span>
                  </p>
                </div>
                <div className="reg-btns">
                  <button className="btn" type="reset">
                    reset
                  </button>
                  <button className="btn">create account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
