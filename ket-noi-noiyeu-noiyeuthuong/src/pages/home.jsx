import React, { useEffect, useState } from "react";
import Header from "../component/layout/header";
import FooterSection from "../component/layout/footer";
import BannerSection from "../component/section/banner";
import MemberSection from "../component/section/member";
import AboutSection from "../component/section/about";
import StorySection from "../component/section/storysection";
import WorkSection from "../component/section/work";
import MemberTwoSection from "../component/section/memberTwo";
import GroupSection from "../component/section/group";
import ClientSection from "../component/section/clints";
import AppsSection from "../component/section/apps";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function HomePages() {
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

      <BannerSection style={{ marginTop: "60px" }} />
      <MemberSection />
      <AboutSection />
      <WorkSection />
      <StorySection />
      <MemberTwoSection />
      <GroupSection />
      <ClientSection />
      <AppsSection />
      <FooterSection />
    </div>
  );
}

export default HomePages;
