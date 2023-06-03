import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/layout/header";

import FooterSection from "../component/layout/footer";
import FilterSearchSection from "../component/section/filtersearch";
import WidgetLikeSection from "../component/section/widgetlike";
import WidgetGroupSection from "../component/section/widgetgroup";

import swal from "sweetalert";
function Group() {
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
  let AllMemberListContent = JSON.parse(localStorage.getItem("timkiem"));
  console.log(AllMemberListContent);
  const setview = (id) => {
    localStorage.setItem("xembanbe", id);
    navigate("/friend");
  };
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
              <div className="profile-details">
                <div className="tab-content" id="nav-tabContent">
                  {/* ////listfren */}
                  <h5 style={{ marginTop: "50px" }}>Kết quả tìm kiếm</h5>
                  <div>
                    <div>
                      <div className="row">
                        <div className="col-xl-8">
                          <article>
                            {/* ds ban be */}
                            <div className="row gy-4 gx-3 justify-content-center">
                              {AllMemberListContent.map((val, i) => (
                                <div
                                  onClick={() => setview(val.id)}
                                  className="col-xl-2 col-lg-3 col-md-4 col-6"
                                  key={i}
                                >
                                  <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                      <div className="lab-thumb">
                                        <img
                                          style={{
                                            paddingRight: "20px",
                                            objectFit: "cover",
                                            borderRadius: "0px",
                                          }}
                                          src={`${val.imgUrl}`}
                                          alt={`${val.imgAlt}`}
                                        />
                                      </div>
                                      <div className="lab-content">
                                        <h6>
                                          <Link to="/profile">
                                            {val.usename}
                                          </Link>{" "}
                                        </h6>
                                        <p>{val.memActive}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
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
                  {/* list frient */}

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
