import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Pagination from "../component/section/pagination";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";
import CommentRespond from "../component/section/commentrespond";
import CommentSection from "../component/section/comments";
import swal from "sweetalert";

function BlogPage() {
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
  //ẩn hiện comment

  //ẩn hiện comment
  let Blogpage = [
    {
      id: 1,
      idusenguoipost: 1,
      day: "March 24, 2021",
      tieude:
        "Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
      noidung:
        "Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    },
  ];
  //iduse giải quyết vấn đề lấy hình ảnh avarta và thông tin người đăng bài
  return (
    <div>
      <Header />
      <br></br>
      <section
        style={{ marginTop: "60px" }}
        className="blog-section padding-tb"
      >
        <div className="container">
          <div className="main-blog">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="blog-wrapper">
                  <div className="post-item">
                    <div className="post-item-inner">
                      <div className="post-thumb">
                        <Link to="/blog-single">
                          <img src="assets/images/blog/01.jpg" alt="blog" />
                        </Link>
                      </div>
                      <div className="post-content">
                        <span className="meta">
                          By <a>Admin</a> March 24, 2021
                        </span>
                        <h3>
                          <Link to="/blog-single">
                            Uompe Qrear High Ecent Nche Without Some Prin Uomp
                            Without Some Qreari
                          </Link>
                        </h3>
                        <p>
                          Rapidious qntegrate distrbuted supply chains throuih
                          marke position bestn practces chain marke positonn
                          bestin practcer ieractvel fashon and sound qources
                          forin iteractve fashion bestin practce ieractve and
                          sound qources for.
                        </p>
                      </div>
                      <div className="blog-footer">
                        <Link to="/blog-single" className="viewall">
                          Read More <i className="icofont-double-right"></i>
                        </Link>
                        <div className="right">
                          <a className="blog-heart">
                            <i className="icofont-heart-alt"></i> 12{" "}
                            <span className="d-none d-sm-inline-block">
                              Like
                            </span>{" "}
                          </a>
                          <a
                            style={{ cursor: "pointer" }}
                            className="blog-comment"
                          >
                            <i className="icofont-comment"></i> 24
                            <span className="d-none d-sm-inline-block">
                              Comments
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-item post-slider">
                    <div className="post-item-inner">
                      <div className="post-thumb">
                        <div className="blog-slider">
                          <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                            navigation={{
                              prevEl: ".blog-slider-prev",
                              nextEl: ".blog-slider-next",
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <img src="assets/images/blog/03.jpg" alt="blog" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/images/blog/02.jpg" alt="blog" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/images/blog/01.jpg" alt="blog" />
                            </SwiperSlide>
                          </Swiper>
                          <div className="blog-slider-next">
                            <i className="icofont-play"></i>
                          </div>
                          <div className="blog-slider-prev">
                            <i className="icofont-play"></i>
                          </div>
                        </div>
                      </div>
                      <div className="post-content">
                        <span className="meta">
                          By <Link to="#">Admin</Link> March 24, 2021
                        </span>
                        <h3>
                          <Link to="/blog-single">
                            Uompe Qrear High Ecent Nche Without Some Prin Uomp
                            Without Some Qreari
                          </Link>
                        </h3>
                        <p>
                          Rapidious qntegrate distrbuted supply chains throuih
                          marke position bestn practces chain marke positonn
                          bestin practcer ieractvel fashon and sound qources
                          forin iteractve fashion bestin practce ieractve and
                          sound qources for.
                        </p>
                      </div>
                      <div className="blog-footer">
                        <Link to="/blog-single" className="viewall">
                          Read More <i className="icofont-double-right"></i>
                        </Link>
                        <div className="right">
                          <a className="blog-heart">
                            <i className="icofont-heart-alt"></i> 12{" "}
                            <span className="d-none d-sm-inline-block">
                              Like
                            </span>{" "}
                          </a>
                          <a className="blog-comment">
                            <i className="icofont-comment"></i> 24
                            <span className="d-none d-sm-inline-block">
                              Comments
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-item video-post">
                    <div className="post-item-inner">
                      <div className="post-thumb">
                        <div className="embed-responsive">
                          <iframe src="https://www.youtube.com/embed/ViOZGtS8FG4"></iframe>
                        </div>
                      </div>
                      <div className="post-content">
                        <span className="meta">
                          By <a>Admin</a> March 24, 2021
                        </span>
                        <h3>
                          <Link to="/blog-single">
                            Uompe Qrear High Ecent Nche Without Some Prin Uomp
                            Without Some Qreari
                          </Link>
                        </h3>
                        <p>
                          Rapidious qntegrate distrbuted supply chains throuih
                          marke position bestn practces chain marke positonn
                          bestin practcer ieractvel fashon and sound qources
                          forin iteractve fashion bestin practce ieractve and
                          sound qources for.
                        </p>
                      </div>
                      <div className="blog-footer">
                        <Link to="/blog-single" className="viewall">
                          Read More <i className="icofont-double-right"></i>
                        </Link>
                        <div className="right">
                          <a className="blog-heart">
                            <i className="icofont-heart-alt"></i> 12{" "}
                            <span className="d-none d-sm-inline-block">
                              Like
                            </span>{" "}
                          </a>
                          <a className="blog-comment">
                            <i className="icofont-comment"></i> 24
                            <span className="d-none d-sm-inline-block">
                              Comments
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-item code-post">
                    <div className="post-item-inner">
                      <div className="post-thumb">
                        <div className="code-content">
                          <img
                            src="assets/images/blog/icon/code.png"
                            alt="blog"
                          />
                          <p>
                            Rapidious qntegrate distrbuted supply chains throuih
                            marke position bestn practces chain marke positonn
                            bestin practcer ieractvel fashon and sound qources
                            forin iteractve fashion bestin practce ieractve and
                            sound qources for.
                          </p>
                        </div>
                      </div>
                      <div className="post-content">
                        <span className="meta">
                          By <a>Admin</a> March 24, 2021
                        </span>
                        <h3>
                          <Link to="/blog-single">
                            Uompe Qrear High Ecent Nche Without Some Prin Uomp
                            Without Some Qreari
                          </Link>
                        </h3>
                        <p>
                          Rapidious qntegrate distrbuted supply chains throuih
                          marke position bestn practces chain marke positonn
                          bestin practcer ieractvel fashon and sound qources
                          forin iteractve fashion bestin practce ieractve and
                          sound qources for.
                        </p>
                      </div>
                      <div className="blog-footer">
                        <Link to="/blog-single" className="viewall">
                          Read More <i className="icofont-double-right"></i>
                        </Link>
                        <div className="right">
                          <a className="blog-heart">
                            <i className="icofont-heart-alt"></i> 12{" "}
                            <span className="d-none d-sm-inline-block">
                              Like
                            </span>{" "}
                          </a>
                          <a className="blog-comment">
                            <i className="icofont-comment"></i> 24
                            <span className="d-none d-sm-inline-block">
                              Comments
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Pagination />
              </div>
              <div className="col-lg-4 col-12">
                <aside className="mt-5 mt-lg-0">
                  <FilterSearchSection />
                  <WidgetLikeSection />
                  <WidgetGroupSection />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default BlogPage;
