import React, { useEffect, useState } from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";

import Pagination from "../component/section/pagination";
import GroupItem from "../component/items/groupitems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function CommunityPage() {
  const [MyGrouoList, setMyGrouoList] = useState([]);
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
  useEffect(() => {
    axios
      .get("http://localhost:8000/MyGrouoList")
      .then((res) => setMyGrouoList(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("dât cong dong", MyGrouoList);
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
              <p>All Groups</p>
              <p>36</p>
            </li>
            <li className="group-search-btn">
              <form action="/">
                <input type="text" placeholder="Search Group Name..." />
                <div className="input-button">
                  <input type="submit" value="Search Now" />
                </div>
              </form>
            </li>
          </ul>
          <div className="groups-wrapper">
            <div className="row g-4">
              <GroupItem MyGrouoList={MyGrouoList} />
            </div>
            <Pagination />
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default CommunityPage;
