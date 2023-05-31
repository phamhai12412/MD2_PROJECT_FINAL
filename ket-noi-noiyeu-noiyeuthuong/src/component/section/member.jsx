import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberItem from "../items/memberitem";
import axios from "axios";

const title = "Thành viên mới";
const subtitle = "Gặp gỡ những người mới ngay hôm nay!";

function MemberSection() {
  const [listnewmember, setListNewMember] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Datause")
      .then((res) => {
        const newMember = res.data.slice(1, 6);
        setListNewMember(newMember);
        console.log(newMember);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="member-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">{subtitle}</h4>
          <h2> {title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-3 g-md-4">
            <MemberItem AllMemberListContent={listnewmember} />
          </div>
          <div className="member-button-group d-flex flex-wrap justify-content-center">
            <Link to="/signup" className="lab-btn">
              <i className="icofont-users"></i>{" "}
              <span>Tham Gia Miễn Phí Với Chúng Tôi</span>
            </Link>
            <Link to="/login" className="lab-btn">
              <i className="icofont-play-alt-1"></i> <span>Đăng Nhập</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberSection;
