import React from "react";
import "./UserManagement.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function UserManagement() {
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
  const handleAPICall = () => {
    setgoiapidatause(true);
  };
  //////////kết thúc gọi data use
  //khóa use
  const khoause = (e) => {
    axios
      .patch(`http://localhost:8000/Datause/${e.id}`, { trangthai: "khoa" })
      .then((res) => console.log("khoathanhcong"))
      .catch((err) => console.log(err));
    handleAPICall();
  };
  ///mở khóa
  const mokhoause = (e) => {
    axios
      .patch(`http://localhost:8000/Datause/${e.id}`, {
        trangthai: "khongkhoa",
      })
      .then((res) => console.log("mothanhcong"))
      .catch((err) => console.log(err));
    handleAPICall();
  };
  //phan trang
  const [pageNumber, setPageNumber] = useState(0); // Số trang hiện tại
  const itemsPerPage = 5; // Số phần tử hiển thị trên mỗi trang
  const pagesVisited = pageNumber * itemsPerPage;
  function handlePageChange({ selected: selectedPage }) {
    setPageNumber(selectedPage);
  }
  //quản lý bài viết
  const quanlybaiviet = () => {
    navigate("/quanlypost");
  }; ///
  ///dăng xuat
  const dangxuat = () => {
    localStorage.setItem("usenameonl", "-1");
    useonl = -1;

    navigate("/login");
  };
  return (
    <div className="userManagement">
      <h2>Quản lý người dùng</h2>
      <p className="action">
        {" "}
        <button
          style={{ cursor: "pointer" }}
          className="btn_open"
          onClick={quanlybaiviet}
        >
          {" "}
          Quản lý bài đăng
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
            <th>Tài khoản</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>{" "}
          </tr>
        </thead>
        <tbody>
          {allmember
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.usename}</td>
                <td>{e.gioitinh}</td>
                <td>{e.diachi}</td>
                {e.trangthai == "khoa" ? (
                  <td>
                    <button
                      className="btn_open"
                      onClick={() => {
                        mokhoause(e);
                      }}
                    >
                      Đã khóa{" "}
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      className="btn_lock"
                      onClick={() => {
                        khoause(e);
                      }}
                    >
                      Không khóa
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(allmember.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default UserManagement;
