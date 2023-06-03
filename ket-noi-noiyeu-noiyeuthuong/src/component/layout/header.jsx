import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const contactNumber = "+84123456789";
const locationText = "Rikkei Academy, HN";

const Header = () => {
  const navigate = useNavigate();

  let useonl = localStorage.getItem("usenameonl");
  let avatar = localStorage.getItem("avatar");

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const headerSection = document.querySelector(".header-section");
      if (value > 200) {
        headerSection.classList.add("header-fixed", "fadeInUp");
      } else {
        headerSection.classList.remove("header-fixed", "fadeInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuTrigger = () => {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".header-bar").classList.toggle("active");
  };

  const menuTriggerTwo = () => {
    document.querySelector(".header-top").classList.toggle("open");
  };

  let idusenameonl = localStorage.getItem("idusenameonl");
  const handleLogout = () => {
    localStorage.setItem("usenameonl", "-1");
    useonl = -1;

    navigate("/login");
  };

  // nhớ fixx

  const handelprofile = () => {
    localStorage.setItem("viewprofile", idusenameonl);
    navigate("/profile");
  };
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="header-top-area">
            <ul className="left">
              <li>
                <i className="icofont-ui-call"></i> <span>{contactNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {locationText}
              </li>
            </ul>
            <ul className="social-icons d-flex align-items-center">
              <li>
                <p>Liên hệ :</p>
              </li>
              <li>
                <a href="#" className="fb">
                  <i className="icofont-facebook-messenger"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="vimeo">
                  <i className="icofont-vimeo"></i>
                </a>
              </li>
              <li>
                <a href="#" className="skype">
                  <i className="icofont-skype"></i>
                </a>
              </li>
              <li>
                <a href="#" className="rss">
                  <i className="icofont-rss-feed"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo2.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <ul className="menu">
                <li>
                  <NavLink exact to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/community">Cộng đồng</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/tinnhan">Tin Nhắn</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Liên hệ</NavLink>
                </li>
              </ul>
              {/* {console.log(datauseol)} */}
              {useonl !== "-1" ? (
                <a style={{ cursor: "pointer" }} onClick={handelprofile}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={avatar}
                    alt="img"
                  />
                  <span style={{ marginLeft: "12px" }}>{useonl}</span>
                  <span
                    onClick={handleLogout}
                    style={{ paddingLeft: "12px", cursor: "pointer" }}
                  >
                    <i className="icofont-logout"></i>
                  </span>
                </a>
              ) : (
                <NavLink to="/login" className="login">
                  <i className="icofont-user"></i> <span>Đăng nhập</span>{" "}
                </NavLink>
              )}
              <div className="header-bar d-lg-none" onClick={menuTrigger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="ellepsis-bar d-lg-none" onClick={menuTriggerTwo}>
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
