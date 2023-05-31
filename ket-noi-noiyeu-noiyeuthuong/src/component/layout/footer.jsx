import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const posttitle = "Tin Tức Gần Đây Của Chúng Tôi";
const abouttitle = "Giới Thiệu Về Dating Online";
const aboutpara =
  "Sứ mệnh kết nối, để mọi người dễ dàng gặp đến gần nhau hơn tạo nên những điều kì diệu";
const newstitle = "Đăng ký cập nhật";
const newspara =
  "Gửi email của bạn cho chúng tôi để luôn được cập nhật những tin tức mới nhất từ ​​chúng tôi.";

let RecentPostList = [
  {
    imgUrl: "assets/images/footer/01.jpg",
    imgAlt: "recent post",
    postTitle: "Bản cập nhật mới nhất 5.1.2 .",
    postDate: "July 23, 2021",
  },
  {
    imgUrl: "assets/images/footer/02.jpg",
    imgAlt: "recent post",
    postTitle: "Dating Online hợp tác cùng Facebook... .",
    postDate: "July 23, 2021",
  },
  {
    imgUrl: "assets/images/footer/03.jpg",
    imgAlt: "recent post",
    postTitle: "Dating Online lọt top 10 ứng dụng... .",
    postDate: "July 23, 2021",
  },
];

function FooterSection() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 justify-content-center g-lg-0">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/01.png"
                      alt="Phone-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Phone Number : +84123456789</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/02.png"
                      alt="email-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Email : admin@Dating Online.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/03.png"
                      alt="location-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Address : Rikkei Academy, HN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-middle padding-tb"
        style={{ backgroundImage: "url(/assets/images/footer/bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title">
                    <h4>{abouttitle}</h4>
                  </div>
                  <div className="fm-item-content">
                    <p className="mb-4">{aboutpara}</p>
                    <img
                      src="assets/images/footer/about.jpg"
                      alt="about-image"
                      className="footer-abt-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title">
                    <h4>{posttitle}</h4>
                  </div>
                  <div className="fm-item-content">
                    {RecentPostList.map((val, i) => (
                      <div className="fm-item-widget lab-item" key={i}>
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <Link>
                              <img
                                src={`${val.imgUrl}`}
                                alt={`${val.imgAlt}`}
                              />
                            </Link>
                          </div>
                          <div className="lab-content">
                            <h6>
                              <Link>{val.postTitle}</Link>
                            </h6>
                            <p>{val.postDate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item-3 mb-lg-0">
                  <div className="fm-item-title">
                    <h4>{newstitle}</h4>
                  </div>
                  <div className="fm-item-content">
                    <p>{newspara}</p>
                    <form>
                      {/* {console.log(email)} */}
                      <div className="form-group">
                        <input
                          onChange={(e) => handleInputChange(e)}
                          value={email}
                          type="text"
                          name="email"
                          id="item01"
                          className="form-control"
                          placeholder="Enter Your email *"
                        />
                      </div>
                      <a type="submit" className="lab-btn">
                        Send Massage <i className="icofont-paper-plane"></i>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-content text-center">
                <p>
                  &copy; 2023 <Link to="/">Dating Online</Link> -Best For Dating
                  website .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
