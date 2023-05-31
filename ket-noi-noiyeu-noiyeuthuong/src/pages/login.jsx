import swal from "sweetalert";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../component/layout/header";
import FooterSection from "../component/layout/footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo payload chứa dữ liệu đăng nhập
    const payload = {
      username: userName,
      password: userPass,
    };
    //kiểm tra đăng nhập
    if (userName == "" || userPass == "") {
      swal(
        "Oops!",
        "Đăng nhập lỗi, nếu bạn chưa có tài khoản nhớ đăng kí",
        "error"
      );
    } else {
      // Gửi yêu cầu đăng nhập tới API bằng axios
      axios
        .get("http://localhost:8000/Datause")
        .then((res) => {
          // Xử lý phản hồi thành công từ API
          // console.log(response.data);
          // console.log(payload);

          const found = res.data.some(
            (obj) =>
              obj.usename === payload.username &&
              obj.password === payload.password
          );

          // Điều hướng tới trang chính hoặc trang sau khi đăng nhập thành công
          if (found) {
            localStorage.setItem("usenameonl", userName);
            const datauseol = res.data.find(
              (item) => item.usename === userName
            );
            localStorage.setItem("idusenameonl", datauseol.id);
            localStorage.setItem("avatar", datauseol.imgUrl);
            localStorage.setItem("thongtin", JSON.stringify(datauseol));

            navigate("/");
          } else
            swal(
              "Oops!",
              "Đăng nhập lỗi, nếu bạn chưa có tài khoản nhớ đăng kí",
              "error"
            );
        })
        .catch((error) => {
          // Xử lý lỗi từ API hoặc yêu cầu không thành công
          console.error("Báo lỗi kiểm tra link api", error);
        });
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div style={{ marginTop: "60px" }} className="login-section padding-tb">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Login</h3>
            <form className="account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="item01"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="User Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="item02"
                  value={userPass}
                  onChange={(e) => setUserPass(e.target.value)}
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="#">Forget Password?</a>
                </div>
              </div>
              <div className="form-group">
                <button className="d-block lab-btn" type="submit">
                  <span>Submit Now</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup"> Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">Login With Social Media</h5>
              <ul className="social-media social-color lab-ul d-flex justify-content-center">
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
};

export default LoginPage;
