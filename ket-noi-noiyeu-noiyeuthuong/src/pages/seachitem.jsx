import React, { useEffect } from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";

import Pagination from "../component/section/pagination";
import GroupItem from "../component/items/groupitems";
import MemberItem from "../component/items/memberitem";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Seachitem() {
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
        className="group-page-section padding-tb"
      >
        <div className="container">
          <ul className="group-search">
            <li className="group-count">
              <p>All member</p>
              <p>36</p>
            </li>
            <li className="group-search-btn"></li>
          </ul>
          <div className="groups-wrapper">
            <div className="row g-4">{/* <MemberItem /> */}</div>
            <Pagination />
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default Seachitem;
