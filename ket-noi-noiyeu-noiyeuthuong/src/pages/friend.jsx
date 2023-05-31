import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/layout/header";

import FooterSection from "../component/layout/footer";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";

import swal from "sweetalert";
import axios from "axios";
import CommentSection from "../component/section/comments";
function FriendPage() {
  //check đăng nhập
  let xembanbe = localStorage.getItem("xembanbe");
  const idusenameonl = localStorage.getItem("idusenameonl");
  const navigate = useNavigate();
  let useonl = localStorage.getItem("usenameonl");
  useEffect(() => {
    if (useonl == -1) {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
      navigate("/login");
    } else if (xembanbe == idusenameonl) {
      navigate("/profile");
    }
  }, [useonl]);
  //kết thúc check đăng nhập

  //gọi api bài post
  const [allpost, setallpost] = useState([]);

  const [shouldCallAPI, setShouldCallAPI] = useState(true);

  useEffect(() => {
    if (shouldCallAPI) {
      axios
        .get("http://localhost:8000/post")
        .then((res) => {
          setallpost(res.data);
          setShouldCallAPI(false); // Đặt biến flag thành false sau khi hoàn thành cuộc gọi API
        })
        .catch((err) => console.log(err));
    }
  }, [shouldCallAPI]);

  // Khi bạn muốn gọi API, đặt biến flag thành true
  const goilaipost = () => {
    setShouldCallAPI(true);
  };

  // Sử dụng handleAPICall khi cần thiết
  // add bạn bè
  // Thêm state để theo dõi trạng thái bạn bè

  const [infouse, setinfouse] = useState({});
  const [houldCallAPI, sethouldCallAPI] = useState(true);

  useEffect(() => {
    if (houldCallAPI) {
      axios
        .get(`http://localhost:8000/Datause/${xembanbe}`)
        .then((res) => {
          setinfouse(res.data);
          sethouldCallAPI(false);
        })
        .catch((err) => console.log(err));
    }
  }, [houldCallAPI, xembanbe]);

  const [goidulieuuseonl, setgoidulieuuseonl] = useState(true);
  const [dulieuuseonl, setuseonl] = useState({});

  useEffect(() => {
    if (goidulieuuseonl) {
      axios
        .get(`http://localhost:8000/Datause/${idusenameonl}`)
        .then((res) => {
          setuseonl(res.data);
          setgoidulieuuseonl(false);
        })
        .catch((err) => console.log(err));
    }
  }, [goidulieuuseonl, idusenameonl]);

  const goilaiuseonl = () => {
    setgoidulieuuseonl(true);
  };

  const goilaiinfouse = () => {
    sethouldCallAPI(true);
  };

  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    if (dulieuuseonl.banbe && dulieuuseonl.banbe.includes(String(xembanbe))) {
      setIsFriend(true);
    } else {
      setIsFriend(false);
    }
  }, [dulieuuseonl.banbe, xembanbe]);

  const addFriend = () => {
    axios
      .patch(`http://localhost:8000/Datause/${idusenameonl}`, {
        banbe: [...dulieuuseonl.banbe, xembanbe],
      })
      .then((res) => {
        console.log(res.data);
        setIsFriend(true);
        swal("Success!", "Đã thêm bạn bè!", "success");
        goidulieuuseonl();
        goilaiinfouse();
        goilaipost();
      })
      .catch((err) => console.log(err));
  };

  const removeFriend = () => {
    const updatedBanbe = dulieuuseonl.banbe.filter(
      (friend) => friend.toString() != xembanbe.toString()
    );

    axios
      .patch(`http://localhost:8000/Datause/${idusenameonl}`, {
        banbe: updatedBanbe,
      })
      .then((res) => {
        console.log(res.data);
        setIsFriend(false);
        swal("Success!", "Đã hủy kết bạn!", "success");
        goidulieuuseonl();
        goilaiinfouse();
        goilaipost();
      })
      .catch((err) => console.log(err));
  };
  let postuse = allpost.filter((post) => post.idusepost == xembanbe);
  console.log(postuse);
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
                    <img src={infouse.imgUrl} alt="DP" />
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
                    <h4>{infouse.usename}</h4>
                    <p>Active 02 Minutes Ago</p>
                  </div>
                  <ul className="profile-contact">
                    <li>
                      <a style={{ cursor: "pointer" }}>
                        <div className="icon">
                          <i className="icofont-user"></i>
                        </div>
                        <div className="text">
                          {isFriend ? (
                            <>
                              <button
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: "4px",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  backgroundColor: "#4caf50",
                                  color: "#ffffff",
                                  border: "none",
                                }}
                                onClick={removeFriend}
                              >
                                Hủy kết bạn
                              </button>
                            </>
                          ) : (
                            <button
                              style={{
                                padding: "8px 16px",
                                borderRadius: "4px",
                                fontSize: "14px",
                                cursor: "pointer",
                                backgroundColor: "#ff0000",
                                color: "#ffffff",
                                border: "none",
                              }}
                              onClick={addFriend}
                            >
                              Kết bạn
                            </button>
                          )}
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
                      <img src={infouse.imgUrl} alt="profile" />
                    </a>
                  </div>
                  <div className="lab-content">
                    <div className="profile-name">
                      <div className="p-name-content">
                        <h4>{infouse.usename}</h4>
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
                          <div className="text"></div>
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
                                      <div className="lab-content"></div>
                                    </div>
                                  </div>
                                  {/* post bài */}
                                  {/* show bài post */}
                                  {postuse.map((e) => (
                                    <div key={e.id}>
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
                                                  src={infouse.imgUrl}
                                                  alt="img"
                                                />
                                              </div>
                                              <div className="author-details">
                                                <h6>
                                                  <a
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    {infouse.usename}
                                                  </a>
                                                </h6>
                                                <ul className="post-status">
                                                  <li className="post-privacy">
                                                    <i className="icofont-world"></i>
                                                    Public
                                                  </li>
                                                  <li className="post-time">
                                                    {e.time}
                                                  </li>
                                                  <li className="post-status"></li>
                                                  <li className="post-status"></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="post-description">
                                            <p>{e.noidung}</p>
                                          </div>
                                        </div>
                                        <div className="post-meta">
                                          <div className="post-meta-top">
                                            {e.imgpost != "" ? (
                                              <img
                                                src={e.imgpost}
                                                style={{
                                                  paddingBottom: "17px",
                                                }}
                                              ></img>
                                            ) : (
                                              <></>
                                            )}

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
                                                  Julia, Petrova and {e.like}{" "}
                                                  like this
                                                </span>
                                              </a>
                                            </p>
                                            <p>
                                              <a style={{ cursor: "pointer" }}>
                                                {e.binhluan.length} Comments
                                              </a>
                                            </p>
                                          </div>
                                          <div
                                            style={{
                                              paddingBottom: "0px",
                                              paddingTop: "5px",
                                            }}
                                            className="post-meta-bottom"
                                          >
                                            <ul className="react-list">
                                              <li className="react">
                                                <a
                                                  style={{ cursor: "pointer" }}
                                                >
                                                  <i className="icofont-like"></i>
                                                  Like
                                                </a>{" "}
                                              </li>
                                              <li className="react">
                                                <a
                                                  style={{ cursor: "pointer" }}
                                                >
                                                  <i className="icofont-speech-comments"></i>
                                                  Comment
                                                </a>
                                              </li>
                                              <li className="react">
                                                <a
                                                  style={{ cursor: "pointer" }}
                                                >
                                                  <i className="icofont-share"></i>{" "}
                                                  Share
                                                </a>
                                              </li>
                                            </ul>

                                            <>
                                              {" "}
                                              <CommentSection
                                                idpost={e.id}
                                                goilaipostcanhan={goilaipost}
                                              ></CommentSection>{" "}
                                            </>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  {/* show bài post */}
                                </div>

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
                                      {infouse.usename}
                                    </p>
                                  </li>

                                  <li>
                                    <p className="info-name">Giới tính</p>
                                    <p className="info-details">
                                      {infouse.gioitinh}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">sở thích</p>
                                    <p className="info-details">
                                      {infouse.sothich}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Tuổi</p>
                                    <p className="info-details">
                                      {infouse.tuoi}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Ngày sinh</p>
                                    <p className="info-details">
                                      {infouse.ngaysinh}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Địa chỉ</p>
                                    <p className="info-details">
                                      {infouse.diachi}
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

export default FriendPage;
