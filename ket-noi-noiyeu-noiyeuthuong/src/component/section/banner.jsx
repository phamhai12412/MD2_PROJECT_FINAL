import React from "react";

const bannertitle = "Giới thiệu Dating Online";
const bannerdesc = (
  <p>
    Hẹn hò nghiêm túc với <strong>Dating Online </strong> Người bạn đời hoàn hảo
    của bạn với 1 cú nhấp.
  </p>
);

function BannerSection() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="intro-form">
                  <div className="intro-form-inner">
                    <h3>{bannertitle}</h3>
                    {bannerdesc}
                    <form action="/" className="banner-form">
                      <div className="gender">
                        <label className="left">Tôi là </label>
                        <div className="custom-select right">
                          <select name="gender" id="gender" className="">
                            <option value="0">Lựa chọn</option>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                          </select>
                        </div>
                      </div>
                      <div className="person">
                        <label className="left">Muốn tìm kiếm</label>
                        <div className="custom-select right">
                          <select name="gender" id="gender-two" className="">
                            <option value="0">Lựa chọn</option>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                          </select>
                        </div>
                      </div>
                      <div className="age">
                        <label className="left">Tuổi</label>
                        <div className="right d-flex justify-content-between">
                          <div className="custom-select">
                            <select name="age-start" id="age">
                              <option value="1">18</option>
                              <option value="2">19</option>
                              <option value="3">20</option>
                              <option value="4">21</option>
                              <option value="5">22</option>
                              <option value="6">23</option>
                              <option value="7">24</option>
                              <option value="8">25</option>
                              <option value="9">26</option>
                              <option value="10">27</option>
                              <option value="11">28</option>
                              <option value="13">29</option>
                              <option value="14">30</option>
                            </select>
                          </div>
                          <div className="custom-select">
                            <select name="age-end" id="age-two">
                              <option value="1">18+</option>
                              <option value="2">19</option>
                              <option value="3">20</option>
                              <option value="4">21</option>
                              <option value="5">22</option>
                              <option value="6">23</option>
                              <option value="7">24</option>
                              <option value="8">25</option>
                              <option value="9">26</option>
                              <option value="10">27</option>
                              <option value="11">28</option>
                              <option value="13">29</option>
                              <option value="14">30</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="city">
                        <label className="left">Thành phố</label>
                        <input
                          className="right"
                          type="text"
                          id="city"
                          placeholder="Tên thành phố của bạn.."
                        />
                      </div>
                      <button type="submit">Tìm kiếm đối tác</button>
                    </form>
                    <ul style={{ cursor: "pointer" }} className="social-list">
                      <li className="google">
                        <a>
                          <img
                            src="assets/images/banner/google.png"
                            alt="img"
                          />
                          <span> Continue with google</span>
                        </a>
                      </li>
                      <li className="facebook">
                        <a>
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a>
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes">
        <img
          src="assets/images/banner/banner-shapes/01.png"
          alt="shape"
          className="banner-shape shape-1"
        />
        <img
          src="assets/images/banner/banner-shapes/02.png"
          alt="shape"
          className="banner-shape shape-2"
        />
        <img
          src="assets/images/banner/banner-shapes/03.png"
          alt="shape"
          className="banner-shape shape-3"
        />
        <img
          src="assets/images/banner/banner-shapes/04.png"
          alt="shape"
          className="banner-shape shape-4"
        />
        <img
          src="assets/images/banner/banner-shapes/05.png"
          alt="shape"
          className="banner-shape shape-5"
        />
        <img
          src="assets/images/banner/banner-shapes/06.png"
          alt="shape"
          className="banner-shape shape-6"
        />
        <img
          src="assets/images/banner/banner-shapes/07.png"
          alt="shape"
          className="banner-shape shape-7"
        />
        <img
          src="assets/images/banner/banner-shapes/08.png"
          alt="shape"
          className="banner-shape shape-8"
        />
      </div>
    </section>
  );
}

export default BannerSection;
