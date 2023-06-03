import React, { useEffect, useState } from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";
import GoogleMap from "../component/section/googlemap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const titel = "Trung tâm trợ giúp";
const desc =
  "Hãy mô tả chi tiết vấn đề bạn đăng gặp phải, đội ngũ kĩ thật của chúng tôi sẽ giúp đỡ bạn.";
const btnText = "Send Our Message";
const infotitle = "Get Information";
const infodesc =
  "Our Contact information Details and Follow us on social media";

let ContactInfoList = [
  {
    imgUrl: "assets/images/contact/01.png",
    imgAlt: "contact info thumb",
    infoTitle: "Office Address",
    infoDesc: "Tầng 7, Tòa Sông Đà",
  },
  {
    imgUrl: "assets/images/contact/02.png",
    imgAlt: "contact info thumb",
    infoTitle: "Phone Number",
    infoDesc: "+84123456789",
  },
  {
    imgUrl: "assets/images/contact/03.png",
    imgAlt: "contact info thumb",
    infoTitle: "Send Mail",
    infoDesc: "admin@gmail.com",
  },
  {
    imgUrl: "assets/images/contact/04.png",
    imgAlt: "contact info thumb",
    infoTitle: "Our Website",
    infoDesc: "www.Blog.vn.com",
  },
];

function ContactPage() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  //check đăng nhập
  const navigate = useNavigate();
  let useonl = localStorage.getItem("usenameonl");
  useEffect(() => {
    if (useonl == -1 || useonl == "admin") {
      swal("Oops!", "Bạn chưa đăng nhập", "error");
      localStorage.setItem("usenameonl", "-1");
      navigate("/login");
    }
  }, [useonl]);
  //kết thúc check đăng nhập
  return (
    <div>
      <div>
        <Header />
        <br></br>

        <div style={{ marginTop: "60px" }} className="contact-section">
          <div className="contact-top padding-tb aside-bg padding-b">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <article className="contact-form-wrapper">
                    <div className="contact-form">
                      <h4>{titel}</h4>
                      <p className="mb-5">{desc}</p>
                      <form
                        action="#"
                        method="POST"
                        id="commentform"
                        className="comment-form"
                      >
                        <input
                          type="text"
                          name="name"
                          id="item01"
                          value={contactName}
                          onChange={(e) => {
                            setContactName(e.target.value);
                          }}
                          placeholder="Your Name *"
                        />
                        <input
                          type="text"
                          name="email"
                          id="item02"
                          value={contactEmail}
                          onChange={(e) => {
                            setContactEmail(e.target.value);
                          }}
                          placeholder="Your Email *"
                        />
                        <input
                          type="text"
                          name="subject"
                          id="item03"
                          value={contactSubject}
                          onChange={(e) => {
                            setContactSubject(e.target.value);
                          }}
                          placeholder="Your Subject *"
                        />
                        <input
                          type="text"
                          name="number"
                          id="item04"
                          value={contactNumber}
                          onChange={(e) => {
                            setContactNumber(e.target.value);
                          }}
                          placeholder="Mobile Number *"
                        />
                        <textarea
                          rows="8"
                          type="text"
                          id="item05"
                          name="message"
                          value={contactMessage}
                          onChange={(e) => {
                            setContactMessage(e.target.value);
                          }}
                          placeholder="Your Message"
                        ></textarea>
                        <button type="submit" className="lab-btn">
                          <span>{btnText}</span>
                        </button>
                      </form>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <div className="contact-info-wrapper">
                    <div className="contact-info-title">
                      <h5>{infotitle}</h5>
                      <p>{infodesc}</p>
                    </div>
                    <div className="contact-info-content">
                      {ContactInfoList.map((val, i) => (
                        <div className="contact-info-item" key={i}>
                          <div className="contact-info-inner">
                            <div className="contact-info-thumb">
                              <img
                                src={`${val.imgUrl}`}
                                alt={`${val.imgAlt}`}
                              />
                            </div>
                            <div className="contact-info-details">
                              <span className="fw-bold">{val.infoTitle}</span>
                              <p>{val.infoDesc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GoogleMap />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default ContactPage;
