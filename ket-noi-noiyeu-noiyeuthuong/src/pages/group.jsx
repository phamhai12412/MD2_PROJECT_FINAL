import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/layout/header";

import FooterSection from "../component/layout/footer";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";

import MemberItem from "../component/items/memberitem";
import swal from "sweetalert";
function Group() {
  //check đăng nhập
  const navigate = useNavigate();
  let useonl = localStorage.getItem("usenameonl");
  useEffect(() => {
    if (useonl == -1) {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
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
        className="profile-section padding-tb"
      >
        <div className="container">
          <div className="section-wrapper">
            <div className="member-profile">
              <div className="profile-item">
                <div className="profile-cover">
                  <img src="assets/images/profile/cover.jpg" alt="cover-pic" />
                  <div className="edit-photo custom-upload">
                    <div className="file-btn">
                      <i className="icofont-camera"></i>
                      Edit Photo
                    </div>
                    <input type="file" />
                  </div>
                </div>
                <div className="profile-information">
                  <div className="profile-pic">
                    <img src="assets/images/profile/Profile.jpg" alt="DP" />
                    <div className="custom-upload">
                      <div className="file-btn">
                        <span className="d-none d-lg-inline-block">
                          {" "}
                          <i className="icofont-camera"></i>
                          Edit
                        </span>
                        <span className="d-lg-none mr-0">
                          <i className="icofont-plus"></i>
                        </span>
                      </div>
                      <input type="file" />
                    </div>
                  </div>
                  <div className="profile-name">
                    <h4>William Smith</h4>
                    <p>Active 02 Minutes Ago</p>
                  </div>
                  <ul className="profile-contact">
                    <li>
                      <a style={{ cursor: "pointer" }}>
                        <div className="icon">
                          <i className="icofont-user"></i>
                        </div>
                        <div className="text">
                          <p>Add Friends</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile-item d-none">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <a style={{ cursor: "pointer" }}>
                      <img
                        src="assets/images/profile/Profile.jpg"
                        alt="profile"
                      />
                    </a>
                  </div>
                  <div className="lab-content">
                    <div className="profile-name">
                      <div className="p-name-content">
                        <h4>William Smith</h4>
                        <p>Active 02 Minutes Ago</p>
                      </div>

                      <div className="contact-button">
                        <button className="contact-btn">
                          <i className="icofont-info-circle"></i>
                        </button>
                      </div>
                    </div>
                    <ul className="profile-contact">
                      <li>
                        <a style={{ cursor: "pointer" }}>
                          <div className="icon">
                            <i className="icofont-user"></i>
                          </div>
                          <div className="text">
                            <p>Add Friends</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a style={{ cursor: "pointer" }}>
                          <div className="icon">
                            <i className="icofont-envelope"></i>
                          </div>
                          <div className="text">
                            <p>Publice Message</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a style={{ cursor: "pointer" }}>
                          <div className="icon">
                            <i className="icofont-envelope"></i>
                          </div>
                          <div className="text">
                            <p>Private Message</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="profile-details">
                <nav className="profile-nav">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-ativity-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#activity"
                      type="button"
                      role="tab"
                      aria-controls="activity"
                      aria-selected="true"
                    >
                      Activity
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      id="nav-friends-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#friends"
                      type="button"
                      role="tab"
                      aria-controls="friends"
                      aria-selected="false"
                    >
                      Friends <span className="item-number">16</span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane activity-page fade show active"
                    id="activity"
                    role="tabpanel"
                  >
                    <div>
                      <div className="row">
                        <div className="col-xl-8">
                          <article>
                            <div className="activity-tab">
                              <div
                                className="tab-content activity-content"
                                id="pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade"
                                  id="pills-personal"
                                  role="tabpanel"
                                  aria-labelledby="pills-personal-tab"
                                ></div>
                                <div
                                  className="tab-pane fade mentions-section show active"
                                  id="pills-mentions"
                                  role="tabpanel"
                                  aria-labelledby="pills-mentions-tab"
                                >
                                  {/* post bài */}
                                  <div className="create-post mb-20">
                                    <div className="lab-inner">
                                      <div className="lab-thumb">
                                        <div className="thumb-inner">
                                          <div className="thumb-img">
                                            <img
                                              style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                              }}
                                              src="https://pgdphurieng.edu.vn/wp-content/uploads/2023/04/avatar-doi-chibi-1-1.jpg"
                                              alt="img"
                                            />
                                          </div>
                                          <div className="thumb-content">
                                            <h6>
                                              <a style={{ cursor: "pointer" }}>
                                                William Smith
                                              </a>
                                            </h6>
                                            <div className="custom-select">
                                              <select>
                                                <option value="1">
                                                  &#xf02c; Public
                                                </option>
                                                <option value="2">
                                                  &#xec61; Private
                                                </option>
                                                <option value="3">
                                                  &#xed0d; Friends
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="lab-content">
                                        <form action="#" className="post-form">
                                          <input
                                            type="text"
                                            placeholder="Whats on your mind. William?"
                                          />
                                          <div className="content-type">
                                            <ul className="content-list">
                                              <li className="text">
                                                <a
                                                  style={{ cursor: "pointer" }}
                                                >
                                                  <i className="icofont-edit"></i>
                                                  Text
                                                </a>
                                              </li>
                                              <li className="image-video">
                                                <div className="file-btn">
                                                  <i className="icofont-camera"></i>
                                                  Photo/Videos
                                                </div>
                                                <input type="file" />
                                              </li>
                                              <li className="attach-file">
                                                <div className="file-btn">
                                                  <i className="icofont-paper-clip"></i>
                                                  Attach File
                                                </div>
                                                <input type="file" />
                                              </li>
                                              <li className="post-submit">
                                                <input
                                                  type="submit"
                                                  value="Post"
                                                  className="lab-btn"
                                                />
                                              </li>
                                            </ul>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  {/* post bài */}
                                  {/* show bài post */}
                                  <div className="post-item mb-20">
                                    <div className="post-content">
                                      <div className="post-author">
                                        <div className="post-author-inner">
                                          <div className="author-thumb">
                                            <img
                                              style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                              }}
                                              src="https://pgdphurieng.edu.vn/wp-content/uploads/2023/04/avatar-doi-chibi-1-1.jpg"
                                              alt="img"
                                            />
                                          </div>
                                          <div className="author-details">
                                            <h6>
                                              <a style={{ cursor: "pointer" }}>
                                                William Smith
                                              </a>
                                            </h6>
                                            <ul className="post-status">
                                              <li className="post-privacy">
                                                <i className="icofont-world"></i>
                                                Public
                                              </li>
                                              <li className="post-time">
                                                6 Mintues Ago
                                              </li>
                                              <li className="post-status">
                                                <span
                                                  style={{
                                                    marginLeft: "19em",
                                                    marginRight: "1em",
                                                  }}
                                                >
                                                  <i className="icofont-edit"></i>{" "}
                                                </span>
                                              </li>
                                              <li className="post-status">
                                                <span
                                                  style={{ cursor: "pointer" }}
                                                >
                                                  <i className="icofont-delete"></i>{" "}
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="post-description">
                                        <p>
                                          Quickly deliver going forward methods
                                          info create empowerment before
                                          client-centered bandwdth Credibly
                                          pontficate interoperable leadership
                                          skills ands B2B data awesome
                                          Continually whiteboard ands B2B data
                                          awesome Continually whiteboard
                                        </p>
                                      </div>
                                    </div>
                                    <div className="post-meta">
                                      <div className="post-meta-top">
                                        <p>
                                          <a
                                            style={{
                                              cursor: "pointer",
                                            }}
                                          >
                                            <i
                                              style={{
                                                paddingRight: "3px",
                                              }}
                                              className="icofont-like"
                                            ></i>{" "}
                                            <i
                                              style={{
                                                paddingRight: "3px",
                                              }}
                                              className="icofont-heart"
                                            ></i>{" "}
                                            <i className="icofont-laughing"></i>
                                            <span
                                              style={{
                                                marginLeft: "20px",
                                              }}
                                            >
                                              Julia, Petrova and 306 like this
                                            </span>
                                          </a>
                                        </p>
                                        <p>
                                          <a style={{ cursor: "pointer" }}>
                                            136 Comments
                                          </a>
                                        </p>
                                      </div>
                                      <div className="post-meta-bottom">
                                        <ul className="react-list">
                                          <li className="react">
                                            <a style={{ cursor: "pointer" }}>
                                              <i className="icofont-like"></i>
                                              Like
                                            </a>{" "}
                                          </li>
                                          <li className="react">
                                            <a style={{ cursor: "pointer" }}>
                                              <i className="icofont-speech-comments"></i>
                                              Comment
                                            </a>
                                          </li>
                                          <li className="react">
                                            <a style={{ cursor: "pointer" }}>
                                              <i className="icofont-share"></i>{" "}
                                              Share
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  {/* show bài post */}
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-favorites"
                                  role="tabpanel"
                                  aria-labelledby="pills-favorites-tab"
                                ></div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-friends"
                                  role="tabpanel"
                                  aria-labelledby="pills-friends-tab"
                                ></div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-groups"
                                  role="tabpanel"
                                  aria-labelledby="pills-groups-tab"
                                ></div>
                              </div>
                            </div>
                          </article>
                        </div>

                        <div className="col-xl-4">
                          <aside className="mt-5 mt-xl-0">
                            <FilterSearchSection />
                            <WidgetLikeSection />
                            <WidgetGroupSection />
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div>
                      <div className="row">
                        <div className="col-xl-8">
                          <article>
                            {/* in for */}
                            <div className="info-card mb-20">
                              <div className="info-card-title">
                                <h6>Base Info</h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Name</p>
                                    <p className="info-details">
                                      William Smith
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">I'm a</p>
                                    <p className="info-details">Woman</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Loking for a</p>
                                    <p className="info-details">Men</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Marital Status</p>
                                    <p className="info-details">Single</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Age</p>
                                    <p className="info-details">36</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Date of Birth</p>
                                    <p className="info-details">27-02-1996</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Address</p>
                                    <p className="info-details">
                                      Streop Rd, Peosur, Inphodux, USA.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="info-card mb-20">
                              <div className="info-card-title">
                                <h6>Myself Summary</h6>
                              </div>
                              <div className="info-card-content">
                                <p>
                                  Collaboratively innovate compelling mindshare
                                  after prospective partnerships Competently
                                  sereiz long-term high-impact internal or
                                  "organic" sources via user friendly strategic
                                  themesr areas creat Dramatically coordinate
                                  premium partnerships rather than standards
                                  compliant technologies ernd Dramatically
                                  matrix ethical collaboration and idea-sharing
                                  through opensource methodologies and
                                  Intrinsicly grow collaborative platforms
                                  vis-a-vis effective scenarios. Energistically
                                  strategize cost effective ideas before the
                                  worke unde.
                                </p>
                              </div>
                            </div>
                            <div className="info-card mb-20">
                              <div className="info-card-title">
                                <h6>Looking For</h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">
                                      Things I'm looking for
                                    </p>
                                    <p className="info-details">
                                      I want a funny person
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Whatever I like</p>
                                    <p className="info-details">
                                      I like to travel a lot
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="info-card mb-20">
                              <div className="info-card-title">
                                <h6>Lifestyle</h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Interest</p>
                                    <p className="info-details">Dogs,Cats</p>
                                  </li>
                                  <li>
                                    <p className="info-name">
                                      Favorite vocations spot
                                    </p>
                                    <p className="info-details">
                                      Maldives, Bangladesh
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Looking for</p>
                                    <p className="info-details">
                                      Serious Relationshiop,Affair
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Smoking</p>
                                    <p className="info-details">
                                      Casual Smoker
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Language</p>
                                    <p className="info-details">
                                      English, French, Italian
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-title">
                                <h6>Physical info</h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Height</p>
                                    <p className="info-details">5'8 ft</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Weight</p>
                                    <p className="info-details">72 kg</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Hair Color</p>
                                    <p className="info-details">Black</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Eye Color</p>
                                    <p className="info-details">Brown</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Body Type</p>
                                    <p className="info-details">Tall</p>
                                  </li>
                                  <li>
                                    <p className="info-name">Ethnicity</p>
                                    <p className="info-details">
                                      Middle Eastern
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* in for */}
                          </article>
                        </div>

                        <div className="col-xl-4">
                          <aside className="mt-5 mt-xl-0">
                            <FilterSearchSection />
                            <WidgetLikeSection />
                            <WidgetGroupSection />
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="friends"
                    role="tabpanel"
                    aria-labelledby="nav-friends-tab"
                  >
                    <div>
                      <div className="row">
                        <div className="col-xl-8">
                          <article>
                            {/* ds ban be */}
                            <div className="row gy-4 gx-3 justify-content-center">
                              {/* <MemberItem></MemberItem> */}
                            </div>
                            {/* ds ban be */}
                          </article>
                        </div>

                        <div className="col-xl-4">
                          <aside className="mt-5 mt-xl-0">
                            <FilterSearchSection />
                            <WidgetLikeSection />
                            <WidgetGroupSection />
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="groups"
                    role="tabpanel"
                    aria-labelledby="nav-groups-tab"
                  >
                    <div>
                      <div className="row">
                        <div className="col-xl-8"></div>

                        <div className="col-xl-4">
                          <aside className="mt-5 mt-xl-0">
                            <FilterSearchSection />
                            <WidgetLikeSection />
                            <WidgetGroupSection />
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="photos"
                    role="tabpanel"
                    aria-labelledby="nav-photos-tab"
                  ></div>
                  <div
                    className="tab-pane fade"
                    id="media"
                    role="tabpanel"
                    aria-labelledby="nav-media-tab"
                  >
                    <div>
                      <div className="row">
                        <div className="col-xl-4">
                          <aside className="mt-5 mt-xl-0">
                            <FilterSearchSection />
                            <WidgetLikeSection />
                            <WidgetGroupSection />
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default Group;
