import React, { useEffect } from "react";

import Header from "../component/layout/header";

import FooterSection from "../component/layout/footer";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";
import CommentSection from "../component/section/comments";
import CommentRespond from "../component/section/commentrespond";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function BlogSinglePage() {
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
      <Header />
      <br></br>

      <section
        style={{ marginTop: "60px" }}
        className="blog-section padding-tb pb-lg-110"
      >
        <div className="container">
          <div className="main-blog">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="blog-wrapper">
                  <div className="post-item">
                    <div className="post-item-inner">
                      <div className="post-thumb">
                        <img src="assets/images/blog/03.jpg" alt="blog" />
                      </div>
                      <div className="post-content">
                        <span className="meta">
                          By <a href="#">Admin</a> March 24, 2021
                        </span>
                        <h3>
                          A wonderf serenity has taken poesion of my entire
                          souin like these sweet mornins
                        </h3>
                        <p>
                          A wonderf serenity has taken poesion of my entire
                          souin like these sweet mornins sprin which enjy with
                          my whole hear I am alone and feel the charm of existen
                          spot which was creatie For the blisse of souls like
                          mineingi am so happy my dear friend, so absoribed in
                          the exquisite sense tranquilera existence, that I
                          neglect my talentsri I should bye incapable of drawin
                          and sinle stroke A wonderful serenity has taken
                          possession of my entire souing like these sweet
                          mornins sprng enjoy with mye whole heart. I am alone,
                          and feel the charm of existthis spot which was
                          creatied the bliss of souls like mineingi am so happy
                          my dear friend, so absoribed in the exquisite sense
                          tranquil existnce, dt I neglect my talentsri I should
                          bye incapable of drawin and single stroke enjoy with
                          my whole hrt. I am alone, and feel the charm of
                          existencethis spot which was For the bliss of souls
                          like mineingis am so happy my dear friend, so
                          absoribed in the exquisite sense tranquil existence,
                          that I neglects my talentsri I should bye incapable of
                          drawing and single the present moment; and yet If feel
                          that I never was a greater artst
                        </p>
                        <blockquote>
                          <p>
                            Steal into The inner Sanc Thro Myse Down Amon The
                            Hall Gras Buzz The Little World Amon The Staks And
                            Grow Famar With Count And Fies Then The Presence of
                            The Almighty Among The Staks{" "}
                          </p>
                        </blockquote>
                        <p>
                          A wonderf serenity has taken poesion of my entire
                          souin like these sweet mornins sprin which enjy with
                          my whole hear I am alone and feel the charm of existen
                          spot which was creatie For the blisse of souls like
                          mineingi am so happy my dear friend, so absoribed in
                          the exquisite sense tranquilera existence, that I
                          neglect my talentsri I should bye incapable of drawin
                          and sinle stroke A wonderful serenity has taken
                          possession of my entire souing like these sweet
                          mornins sprng enjoy with mye whole heart. I am alone,
                          and feel the charm of existthis spot which was
                          creatied the bliss of souls like mineingi am so happy
                          my dear friend, so absoribed in the exquisite sense
                          tranquil existnce, dt I neglect my talentsri I should
                          bye incapable of drawin and single stroke enjoy with
                          my whole hrt. I am alone, and feel the charm of
                          existencethis spot which was For the bliss.
                        </p>
                      </div>
                      <div className="tags-section">
                        <ul className="tags">
                          <li>
                            <span>
                              <i className="icofont-tags"></i>
                            </span>
                          </li>
                          <li>
                            <a href="#">Dantal</a>
                          </li>
                          <li>
                            <a href="#">Health Care</a>
                          </li>
                          <li>
                            <a href="#">Company</a>
                          </li>
                          <li>
                            <a href="#">Corporate</a>
                          </li>
                        </ul>
                        <ul className="social-link-list d-flex flex-wrap">
                          <li>
                            <a href="#" className="facebook">
                              <i className="icofont-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dribble">
                              <i className="icofont-dribble"></i>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                  <CommentRespond />
                  <CommentSection />
                </div>
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

export default BlogSinglePage;
