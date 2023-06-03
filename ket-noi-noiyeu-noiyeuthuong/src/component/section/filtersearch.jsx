import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const title = "Lọc Tìm Kiếm Thành Viên";
const desc =
  "Hẹn Hò Nghiêm túc Với Blog.vn Người bạn đời hoàn hảo của bạn chỉ là một cú nhấp chuột.";

function FilterSearchSection() {
  const navigate = useNavigate();
  const [goiapidatause, setgoiapidatause] = useState(true);
  const [Datause, setallmember] = useState([]);
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

  const [gender, setGender] = useState(""); // Biến trạng thái cho giới tính
  const [age, setAge] = useState(""); // Biến trạng thái cho tuổi
  const [address, setAddress] = useState(""); // Biến trạng thái cho địa chỉ
  const [interest, setInterest] = useState(""); // Biến trạng thái cho sở thích

  const handleGenderChange = (event) => {
    // Hàm được gọi khi giá trị của trường input giới tính thay đổi
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    // Hàm được gọi khi giá trị của trường input tuổi thay đổi
    setAge(event.target.value);
  };

  const handleAddressChange = (event) => {
    // Hàm được gọi khi giá trị của trường input địa chỉ thay đổi
    setAddress(event.target.value);
  };

  const handleInterestChange = (event) => {
    // Hàm được gọi khi giá trị của trường input sở thích thay đổi
    setInterest(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAPICall();
    const filteredData = Datause.filter((item) => {
      if (
        gender !== "" &&
        item.gioitinh.toLowerCase() !== gender.toLowerCase()
      ) {
        return false;
      }
      if (age !== "" && item.tuoi !== age) {
        return false;
      }
      if (
        address !== "" &&
        item.diachi.toLowerCase() !== address.toLowerCase()
      ) {
        return false;
      }
      if (interest !== "" && !item.sothich.includes(interest)) {
        return false;
      }
      return true;
    });

    // Thay đổi điều kiện kiểm tra thành filteredData.length > 0
    localStorage.setItem("timkiem", JSON.stringify(filteredData));
    navigate("/timkiem");
  };

  return (
    <div>
      <div className="widget search-widget">
        <div className="widget-inner">
          <div className="widget-title">
            <h5>{title}</h5>
          </div>
          <div className="widget-content">
            <p>{desc}</p>
            <form className="banner-form" onSubmit={handleSubmit}>
              <div className="person">
                <div className="custom-select right w-100">
                  <select
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <option value="">Tìm kiếm</option>
                    <option value="nam">Nam</option>
                    <option value="nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="age">
                <div className="right d-flex justify-content-between w-100">
                  <div className="custom-select">
                    <select value={age} onChange={handleAgeChange}>
                      <option value="">Tuổi</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      {/* Add more options for age */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="city">
                <div className="custom-select right w-100">
                  <select
                    className=""
                    value={address}
                    onChange={handleAddressChange}
                  >
                    <option value="">Khu vực</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option value="Đà Lạt">Đà Lạt</option>
                    <option value="Nha Trang">Nha Trang</option>
                  </select>
                </div>
              </div>
              <div className="interest">
                <div className="custom-select right w-100">
                  <select
                    className=""
                    value={interest}
                    onChange={handleInterestChange}
                  >
                    <option value="">Sở thích của bạn</option>
                    <option value="chơi game">Chơi game</option>
                    <option value="nghe nhạc">Nghe nhạc</option>
                    <option value="xem phim">Xem phim</option>
                    <option value="chạy bộ">Chạy bộ</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSearchSection;
