import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";
import axios from "axios";
import swal from "sweetalert";

const title = "Register Now";
const subtitle = "Register With Social Media";

function SignInPage() {
  const [regName, setRegName] = useState("");

  const [regPassword, setRegPassword] = useState("");
  const [regConPassword, setRegConPassword] = useState("");
  const navigate = useNavigate();
  const [goiapidatause, setgoiapidatause] = useState(true);
  const [Datause, setallmember] = useState([]);
  useEffect(() => {
    if (goiapidatause) {
      axios
        .get("http://localhost:8000/Datause")
        .then((res) => {
          setallmember(res.data);
          setgoiapidatause(false); // Đặt biến flag thành false sau khi hoàn thành cuộc gọi API
        })
        .catch((err) => console.log(err));
    }
  }, [goiapidatause]);

  // Khi bạn muốn gọi API, đặt biến flag thành true
  const handleAPICall = () => {
    setgoiapidatause(true);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    let check = Datause.some((item) => item.usename == regName);
    if (check) {
      swal("Oops!", "Đăng kí lỗi, Tài khoản đã tồn tại", "error");
    } else if (
      regPassword === regConPassword &&
      regName.length > 5 &&
      regConPassword.length > 5
    ) {
      axios
        .post("http://localhost:8000/Datause", {
          imgUrl:
            "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-19.jpg",
          password: regPassword,
          nhom: [],
          banbe: [],
          sothich: "",
          gioitinh: "",
          ngaysinh: "",
          diachi: "",
          usename: regName,
          memActive: "Active now Day",
          tuoi: "",
          trangthai: "khongkhoa",
        })
        .then((res) => {
          console.log("thanh công");
        });
      navigate("/login");
    } else if (regPassword != regConPassword) {
      swal("Oops!", "Đăng kí lỗi, Mật khẩu xác nhận không khớp", "error");
    } else if (regName.length <= 5 || regConPassword.length <= 5) {
      swal(
        "Oops!",
        "Đăng kí lỗi, Tên tài khoản hoặc mật khẩu quá ngắn",
        "error"
      );
    }
  };

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
                <button className="d-block lab-btn" onClick={handleRegister}>
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
                  <a className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="pinterest">
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
