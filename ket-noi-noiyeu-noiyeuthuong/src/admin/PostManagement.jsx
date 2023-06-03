import React, { useState, useEffect } from "react";
import "./PostManagement.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function PostManagement() {
  //check đăng nhập
  const navigate = useNavigate();
  let useonl = localStorage.getItem("usenameonl");
  useEffect(() => {
    if (useonl == "-1" || useonl != "admin") {
      swal("Oops!", "Đăng nhập đi, không vào được đâu :))", "error");
      localStorage.setItem("usenameonl", "-1");
      navigate("/login");
    }
  }, [useonl]);
  //kết thúc check đăng nhập
  //gọi data use
  // Mảng chứa thông tin các thành viên có ID tương ứng
  const [allmember, setallmember] = useState([]);

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
  const handleAPICalluse = () => {
    setgoiapidatause(true);
  };
  //////////kết thúc gọi data use
  //gọi data post
  // Mảng chứa thông tin các thành viên có ID tương ứng
  const [allpost, setallpost] = useState([]);

  const [goiapipost, setgoiapipost] = useState(true);

  useEffect(() => {
    if (goiapipost) {
      axios
        .get("http://localhost:8000/post")
        .then((res) => {
          setallpost(res.data);
          setgoiapipost(false); // Đặt biến flag thành false sau khi hoàn thành cuộc gọi API
        })
        .catch((err) => console.log(err));
    }
  }, [goiapipost]);

  // Khi bạn muốn gọi API, đặt biến flag thành true
  const handleAPICallpost = () => {
    setgoiapipost(true);
  };
  //////////kết thúc gọi data post
  //   kết hợp dữ liệu để lấy ra các thông tin cần thiết\
  let tonghop = allpost.map((element) => {
    let id = element.idusepost;
    let timkiem = allmember.find((item) => item.id.toString() == id);
    if (timkiem) {
      return {
        idusepost: id,
        noidung: element.noidung,
        imgpost: element.imgpost,
        imgUrl: timkiem.imgUrl,
        usename: timkiem.usename,
        id: element.id,
        trangthai: element.trangthai,
      };
    }
  });
  console.log(tonghop);
  ///chặn bài post
  const chanbaipost = (e) => {
    console.log("check post", e);
    axios
      .patch(`http://localhost:8000/post/${e.id}`, {
        trangthai: "an",
      })
      .then((res) => console.log("chặn post thành công"))
      .catch((err) => console.log(err));
    handleAPICallpost();
  };
  ///
  ///mở bài post
  const mobaipost = (e) => {
    console.log("check post", e);
    axios
      .patch(`http://localhost:8000/post/${e.id}`, {
        trangthai: "hien",
      })
      .then((res) => console.log("mở post thành công"))
      .catch((err) => console.log(err));
    handleAPICallpost();
  };
  //quản lý bài viết
  const quanlybaiviet = () => {
    navigate("/adminuse");
  }; ///
  ///dăng xuat
  const dangxuat = () => {
    localStorage.setItem("usenameonl", "-1");
    useonl = -1;

    navigate("/login");
  };
  return (
    <div className="postManagement">
      <h2>Quản lý bài đăng</h2>
      <p className="action">
        {" "}
        <button
          style={{ cursor: "pointer" }}
          className="btn_open"
          onClick={quanlybaiviet}
        >
          {" "}
          Quản lý use
        </button>{" "}
        <button
          style={{ cursor: "pointer" }}
          className="btn_lock"
          onClick={dangxuat}
        >
          {" "}
          Đăng xuất
        </button>{" "}
      </p>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Nội dung</th>

            <th>Người đăng</th>
            <th>Quản lý bài viết</th>
          </tr>
        </thead>
        <tbody>
          {tonghop.map((e, i) => (
            <tr key={i}>
              <td>{i++}</td>
              {e.imgpost == "" ? (
                <td>Bài viết không có hình ảnh</td>
              ) : (
                <td>
                  <img src={e.imgpost} alt="" />
                </td>
              )}

              <td>{e.noidung}</td>

              <td>{e.usename}</td>
              {e.trangthai == "an" ? (
                <td>
                  <button
                    className="btn_lock"
                    onClick={() => {
                      mobaipost(e);
                    }}
                  >
                    Mở
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    className="btn_open "
                    onClick={() => {
                      chanbaipost(e);
                    }}
                  >
                    Chặn
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostManagement;
