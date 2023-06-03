import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../component/layout/header";

import FooterSection from "../component/layout/footer";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";

import MemberItem from "../component/items/memberitem";
import GroupItem from "../component/items/groupitems";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import CommentRespond from "../component/section/commentrespond";
import CommentSection from "../component/section/comments";

function ProfilePage() {
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
  //lấy id được ghi nhớ từ hành đông click vào đối tượng muốn xem trang cá nhân để view ra mà hình
  //tận dụng trang để xem được cả thông tin của mình , bạn bè, hay đối tượng khác
  const viewprofile = localStorage.getItem("viewprofile");
  const [infouse, setinfouse] = useState({});
  //goi api user viewprofile

  const [houldCallAPI, sethouldCallAPI] = useState(true);

  useEffect(() => {
    if (houldCallAPI) {
      axios
        .get(`http://localhost:8000/Datause/${viewprofile}`)
        .then((res) => {
          setinfouse(res.data);
          sethouldCallAPI(false); // Đặt biến flag thành false sau khi hoàn thành cuộc gọi API
        })
        .catch((err) => console.log(err));
    }
  }, [houldCallAPI]);

  // Khi bạn muốn gọi API, đặt biến flag thành true
  const goilaiinfouse = () => {
    sethouldCallAPI(true);
  };

  // Sử dụng handleAPICall khi cần thiết
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

  ////////////

  let postuse = allpost.filter((post) => post.idusepost == viewprofile);
  console.log("day là post", postuse);

  //lọc ra các post có trạng thái hiện

  let phanTuHien = postuse.filter(function (phanTu) {
    return phanTu.trangthai == "hien";
  });
  postuse = phanTuHien;
  //kết thúc lọc
  // kết thúc view

  //ẩn hiện comment
  // console.log("infouse", infouse);
  // console.log("postuse", postuse);
  ///thêm bài viêt
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handlePostSubmit = (event) => {
    event.preventDefault();

    if (postContent === "") {
      swal("Bạn chưa nhập nội dung");
      return;
    }

    const newPost = {
      idusepost: viewprofile, // Thay đổi giá trị này nếu bạn cần gán id người dùng hiện tại
      time: new Date().toLocaleString(),
      noidung: postContent,
      binhluan: [],

      imgpost: "", // Giá trị ban đầu của imgpost
      uselike: [],
      trangthai: "hien",
    };

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        newPost.imgpost = reader.result; // Lưu giá trị Base64 vào imgpost

        // Gửi bài viết mới lên API
        axios
          .post("http://localhost:8000/post", newPost)
          .then((res) => {
            goilaipost();
            console.log("Thành công");
            setPostContent("");
            setSelectedImage(null);
            setPreviewImage(null);
            postuse = allpost.filter((post) => post.idusepost == viewprofile);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      reader.readAsDataURL(selectedImage);
    } else {
      // Gửi bài viết mới lên API nếu không có hình ảnh được chọn
      axios
        .post("http://localhost:8000/post", newPost)
        .then((res) => {
          goilaipost();
          console.log("Thành công");
          setPostContent("");
          setSelectedImage(null);
          setPreviewImage(null);
          postuse = allpost.filter((post) => post.idusepost == viewprofile);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(file);
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  //deletepost
  const deletePost = (postId) => {
    // Gửi yêu cầu xóa bài viết đến server
    axios
      .delete(`http://localhost:8000/post/${postId}`)
      .then((res) => {
        goilaipost();
        // Nếu xóa thành công, cập nhật lại danh sách bài viết

        postuse = allpost.filter((post) => post.idusepost == viewprofile);
      })

      .catch((err) => console.log(err));
  };
  ///sửa bài viết
  const [editingPost, setEditingPost] = useState(null);
  const [editingId, seteditingId] = useState(null);
  const handleEditPost = (postId) => {
    // Tìm bài viết cần chỉnh sửa trong danh sách bài viết
    const postToEdit = allpost.find((post) => post.id == postId);

    // Nếu tìm thấy bài viết, cập nhật state editingPost
    if (postToEdit) {
      setEditingPost(postToEdit);
      seteditingId(postId);
    }
  };
  const saveEditedPost = () => {
    axios
      .put(`http://localhost:8000/post/${editingPost.id}`, editingPost)
      .then((res) => {
        goilaipost();
        // Cập nhật danh sách bài viết sau khi chỉnh sửa thành công
        const updatedPosts = allpost.map((post) =>
          post.id == editingPost.id ? editingPost : post
        );
        setallpost(updatedPosts);
        setEditingPost(null); // Đặt editingPost về null để tắt form chỉnh sửa
      })
      .catch((err) => console.log(err));
  };
  ////
  // thay đổi avartar

  const [selectedImageavata, setSelectedImageavata] = useState(null);
  const [imagePreviewavata, setImagePreviewavata] = useState(null);

  const handleImageChangeavata = (event) => {
    const file = event.target.files[0];
    setSelectedImageavata(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewavata(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUploadavata = () => {
    if (selectedImageavata) {
      const reader = new FileReader();
      const editavata = {
        imgUrl: "",
      };
      reader.onloadend = () => {
        editavata.imgUrl = reader.result; // Lưu giá trị Base64 vào imgpost

        // Gửi bài viết mới lên API
        axios
          .patch(`http://localhost:8000/Datause/${viewprofile}`, editavata)
          .then((res) => {
            localStorage.setItem("avatar", imagePreviewavata);
            goilaipost();
            goilaiinfouse();
            console.log("Thành công");

            postuse = allpost.filter((post) => post.idusepost == viewprofile);
            setImagePreviewavata(null);
            selectedImageavata(null);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      reader.readAsDataURL(selectedImageavata);
    }
  };
  ////thay đổi hồ sơ cá nhân
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    axios
      .patch(`http://localhost:8000/Datause/${viewprofile}`, infouse)
      .then((res) => {
        goilaipost();
        goilaiinfouse();
        console.log("Thành công");

        postuse = allpost.filter((post) => post.idusepost == viewprofile);
      })
      .catch((err) => {
        console.log(err);
      });
    // Thực hiện logic lưu thông tin sau khi chỉnh sửa ở đây
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setinfouse((res) => ({
      ...res,
      [name]: value,
    }));
  };
  ///dựa vào id bạn bè đã được lưu trũ lọc trong ds thành viên lấy thông tin để view
  // Mảng chứa thông tin các thành viên có ID tương ứng
  const [allmember, setallmember] = useState([]);
  const [laythongtinallbanbe, setLaythongtinallbanbe] = useState([]);

  const [goiapidatause, setgoiapidatause] = useState(true);

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

  // Sử dụng handleAPICall khi cần thiết
  const xembanbe = () => {
    axios
      .get("http://localhost:8000/Datause")
      .then((res) => {
        setallmember(res.data);
        let allbanbe = infouse.banbe;
        let filteredMembers = allmember.filter((member) =>
          allbanbe.includes(member.id.toString())
        );
        setLaythongtinallbanbe(filteredMembers);
      })
      .catch((err) => console.log(err));
    console.log(laythongtinallbanbe);
  };
  ///chưc nang like
  let idusenameonl = localStorage.getItem("idusenameonl");

  let kiemtra = -1;
  const chucnanglike = (e) => {
    console.log("chuc nang like", e);
    kiemtra = e.uselike.indexOf(idusenameonl);
    let manguselike = [...e.uselike];
    if (kiemtra != -1) {
      manguselike.splice(kiemtra, 1);
      axios
        .patch(`http://localhost:8000/post/${e.id}`, { uselike: manguselike })
        .then((res) => console.log("xoa thanh cong"))
        .catch((err) => console.log(err));
      goilaipost();
    } else {
      manguselike.push(idusenameonl);
      axios
        .patch(`http://localhost:8000/post/${e.id}`, { uselike: manguselike })
        .then((res) => console.log("them thanh cong"))
        .catch((err) => console.log(err));
      goilaipost();
    }
  };
  ///

  return (
    <div>
      <Header />
      <br></br>

      <section
        style={{ marginTop: "50px" }}
        className="profile-section padding-tb"
      >
        <div className="container">
          <div className="section-wrapper">
            <div className="member-profile">
              <div className="profile-item">
                <div className="profile-cover">
                  <img src="assets/images/profile/cover.jpg" alt="cover-pic" />
                  <div>
                    <div className="file-btn"></div>
                  </div>
                </div>
                <div className="profile-information">
                  <div className="profile-pic">
                    {imagePreviewavata != null ? (
                      <img src={imagePreviewavata} />
                    ) : (
                      <img src={infouse.imgUrl} />
                    )}

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
                      <input type="file" onChange={handleImageChangeavata} />
                      {imagePreviewavata == null ? (
                        <button
                          style={{
                            backgroundColor: "#3498db",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                        >
                          Upload
                        </button>
                      ) : (
                        <button
                          style={{
                            backgroundColor: "#3498db",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                          onClick={handleImageUploadavata}
                        >
                          lưu
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="profile-name">
                    <h4>{infouse.usename}</h4>
                  </div>
                  <ul className="profile-contact">
                    {infouse.usename == useonl ? (
                      <></>
                    ) : (
                      <li>
                        <a style={{ cursor: "pointer" }}>
                          <div className="icon">
                            <i className="icofont-user"></i>
                          </div>

                          <div className="text">
                            <p>Add Friends</p>
                          </div>
                          {/* check xem phải use đang vào trang cá nhân mình ko để tùy biến */}
                        </a>
                      </li>
                    )}
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
                      onClick={xembanbe}
                      className="nav-link"
                      id="nav-friends-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#friends"
                      type="button"
                      role="tab"
                      aria-controls="friends"
                      aria-selected="false"
                    >
                      Friends{" "}
                      {laythongtinallbanbe.length == 0 ? (
                        <span></span>
                      ) : (
                        <span className="item-number">
                          {laythongtinallbanbe.length}{" "}
                        </span>
                      )}
                    </button>

                    <button
                      className="nav-link"
                      id="nav-groups-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#groups"
                      type="button"
                      role="tab"
                      aria-controls="groups"
                      aria-selected="false"
                    >
                      Groups <span className="item-number">06</span>
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
                                              src={infouse.imgUrl}
                                              alt="img"
                                            />
                                          </div>
                                          <div className="thumb-content">
                                            <h6>
                                              <a style={{ cursor: "pointer" }}>
                                                {infouse.usename}
                                              </a>
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="lab-content">
                                        <form
                                          onSubmit={handlePostSubmit}
                                          action="#"
                                          className="post-form"
                                        >
                                          {previewImage && (
                                            <div>
                                              <img
                                                src={previewImage}
                                                alt="Preview"
                                                style={{
                                                  maxWidth: "200px",
                                                  height: "auto",
                                                }}
                                              />
                                            </div>
                                          )}
                                          <input
                                            type="text"
                                            placeholder="What's on your mind, William?"
                                            value={postContent}
                                            onChange={(event) =>
                                              setPostContent(event.target.value)
                                            }
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
                                                <input
                                                  type="file"
                                                  onChange={handleImageChange}
                                                />
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
                                                  <li className="post-status">
                                                    <span
                                                      style={{
                                                        marginLeft: "27em",
                                                        marginRight: "1em",
                                                      }}
                                                    >
                                                      <i
                                                        onClick={() =>
                                                          handleEditPost(e.id)
                                                        }
                                                        className="icofont-edit"
                                                      ></i>{" "}
                                                    </span>
                                                  </li>
                                                  <li className="post-status">
                                                    <span
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      <i
                                                        onClick={() =>
                                                          deletePost(e.id)
                                                        }
                                                        className="icofont-delete"
                                                      ></i>{" "}
                                                    </span>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="post-description">
                                            {editingId == e.id &&
                                            editingPost != null ? (
                                              <>
                                                <textarea
                                                  style={{
                                                    width: "100%",
                                                    height: "150px",
                                                    padding: "10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                    backgroundColor: "#210053",
                                                  }}
                                                  value={editingPost.noidung}
                                                  onChange={(e) =>
                                                    setEditingPost({
                                                      ...editingPost,
                                                      noidung: e.target.value,
                                                    })
                                                  }
                                                />
                                                <button
                                                  style={{
                                                    padding: "8px 16px",
                                                    backgroundColor: "#007bff",
                                                    color: "#fff",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={saveEditedPost}
                                                >
                                                  Lưu
                                                </button>
                                              </>
                                            ) : (
                                              <p>{e.noidung}</p>
                                            )}
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
                                                  Julia, Petrova and{" "}
                                                  {e.uselike.length} like this
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
                                              <li
                                                onClick={() => {
                                                  chucnanglike(e);
                                                }}
                                                className="react"
                                              >
                                                {e.uselike.indexOf(
                                                  idusenameonl
                                                ) == -1 ? (
                                                  <a
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    <i className="icofont-like"></i>
                                                    Like
                                                  </a>
                                                ) : (
                                                  <a
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    <i className="icofont-like"></i>
                                                    DisLike
                                                  </a>
                                                )}
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
                                <h6>Thông tin</h6>
                                {editing ? (
                                  <span onClick={handleSave}>
                                    <i className="icofont-save"></i>
                                  </span>
                                ) : (
                                  <span onClick={handleEdit}>
                                    <i className="icofont-edit"></i>
                                  </span>
                                )}
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Name</p>
                                    {editing ? (
                                      <input
                                        style={{ backgroundColor: "#210053" }}
                                        type="text"
                                        name="usename"
                                        value={infouse.usename}
                                        onChange={handleInputChange}
                                      />
                                    ) : (
                                      <p className="info-details">
                                        {infouse.usename}
                                      </p>
                                    )}
                                  </li>
                                  <li>
                                    <p className="info-name">Giới tính</p>
                                    {editing ? (
                                      <select
                                        style={{ backgroundColor: "#210053" }}
                                        name="gioitinh"
                                        value={infouse.gioitinh}
                                        onChange={handleInputChange}
                                      >
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                      </select>
                                    ) : (
                                      <p className="info-details">
                                        {infouse.gioitinh}
                                      </p>
                                    )}
                                  </li>
                                  <li>
                                    <p className="info-name">Ngày sinh</p>
                                    {editing ? (
                                      <input
                                        style={{ backgroundColor: "#210053" }}
                                        type="text"
                                        name="ngaysinh"
                                        value={infouse.ngaysinh}
                                        onChange={handleInputChange}
                                      />
                                    ) : (
                                      <p className="info-details">
                                        {infouse.ngaysinh}
                                      </p>
                                    )}
                                  </li>

                                  <li>
                                    <p className="info-name">Age</p>
                                    {editing ? (
                                      <select
                                        style={{ backgroundColor: "#210053" }}
                                        type="text"
                                        name="tuoi"
                                        value={infouse.tuoi}
                                        onChange={handleInputChange}
                                      >
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                      </select>
                                    ) : (
                                      <p className="info-details">
                                        {infouse.tuoi}
                                      </p>
                                    )}
                                  </li>

                                  <li>
                                    <p className="info-name">Địa chỉ</p>
                                    {editing ? (
                                      <input
                                        style={{ backgroundColor: "#210053" }}
                                        type="text"
                                        name="diachi"
                                        value={infouse.diachi}
                                        onChange={handleInputChange}
                                      />
                                    ) : (
                                      <p className="info-details">
                                        {infouse.diachi}
                                      </p>
                                    )}
                                  </li>

                                  <li>
                                    <p className="info-name">Sở thích</p>
                                    {editing ? (
                                      <input
                                        style={{ backgroundColor: "#210053" }}
                                        type="text"
                                        name="sothich"
                                        value={infouse.sothich}
                                        onChange={handleInputChange}
                                      />
                                    ) : (
                                      <p className="info-details">
                                        {infouse.sothich}
                                      </p>
                                    )}
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
                          {/* ban be */}
                          <article>
                            <div className="row gy-4 gx-3 justify-content-center">
                              <MemberItem
                                AllMemberListContent={laythongtinallbanbe}
                              ></MemberItem>
                            </div>
                          </article>
                          {/* ban be */}
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
                        <div className="col-xl-8">
                          {/* hien thi group tham gia */}
                          <article>
                            <div className="row gy-3">
                              {/* <GroupItem itemNumber={4} /> */}
                            </div>
                          </article>
                          {/* hien thi group tham gia */}
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
                        <div className="col-xl-8">
                          <article>
                            <div className="media-wrapper">
                              <div className="tab-content" id="myTabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="all-media"
                                  role="tabpanel"
                                  aria-labelledby="all-media-tab"
                                ></div>

                                <div
                                  className="tab-pane fade"
                                  id="album"
                                  role="tabpanel"
                                  aria-labelledby="album-tab"
                                ></div>
                                <div
                                  className="tab-pane fade"
                                  id="photos-media"
                                  role="tabpanel"
                                  aria-labelledby="photos-media-tab"
                                ></div>

                                <div
                                  className="tab-pane fade"
                                  id="video"
                                  role="tabpanel"
                                  aria-labelledby="video-tab"
                                ></div>

                                <div
                                  className="tab-pane fade"
                                  id="music"
                                  role="tabpanel"
                                  aria-labelledby="music-tab"
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

export default ProfilePage;
