import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";

const title = "Register Now";
const subtitle = "Register With Social Media";

function SignInPage() {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConPassword, setRegConPassword] = useState("");

  return (
    <div>
      <Header />
      <br></br>
      <div style={{ marginTop: "60px" }} className="login-section padding-tb">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="item01"
                  value={regName}
                  onChange={(e) => {
                    setRegName(e.target.value);
                  }}
                  placeholder="Your Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="item02"
                  value={regEmail}
                  onChange={(e) => {
                    setRegEmail(e.target.value);
                  }}
                  placeholder="Your email *"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="item03"
                  value={regPassword}
                  onChange={(e) => {
                    setRegPassword(e.target.value);
                  }}
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="conpassword"
                  id="item04"
                  value={regConPassword}
                  onChange={(e) => {
                    setRegConPassword(e.target.value);
                  }}
                  placeholder="Confirm Password *"
                />
              </div>
              <div className="form-group">
                <button className="d-block lab-btn">
                  <span>Get Started Now</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">{subtitle}</h5>
              <ul className="social-media social-color justify-content-center d-flex lab-ul">
                <li>
                  <a href="#" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <i className="icofont-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default SignInPage;
