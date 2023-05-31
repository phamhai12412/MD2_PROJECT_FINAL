import React from "react";
import { Link } from "react-router-dom";

function MemberTwoSection() {
  return (
    <section className="top-member-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">Top Members</h4>
          <h2>Members Online Now</h2>
        </div>
        <div className="section-wrapper">
          <ul
            className="nav nav-tab sbutton-group filters-button-group w-100 d-flex flex-wrap justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="filter-btn active"
                id="boygirl-tab"
                data-bs-toggle="tab"
                data-bs-target="#boygirl"
                type="button"
                role="tab"
                aria-controls="boygirl"
                aria-selected="true"
              >
                <i className="icofont-heart-alt"></i> Show all
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="filter-btn"
                id="girl-tab"
                data-bs-toggle="tab"
                data-bs-target="#girl"
                type="button"
                role="tab"
                aria-controls="girl"
                aria-selected="true"
              >
                <i className="icofont-girl"></i> new girl member
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="filter-btn"
                id="boy-tab"
                data-bs-toggle="tab"
                data-bs-target="#boy"
                type="button"
                role="tab"
                aria-controls="boy"
                aria-selected="true"
              >
                <i className="icofont-hotel-boy"></i> New Boy Member
              </button>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="boygirl"
              role="tabpanel"
              aria-labelledby="boygirl-tab"
            >
              {/* Những người online */}
              <div className="grid-memberlist d-flex flex-wrap">
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/01.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Johanna</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/03.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Selinae</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/02.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrea Guido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/04.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Rocky deo</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/05.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Jhon doe</Link>{" "}
                        </h6>
                        <p>Hoạt động 5 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/06.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Angelina</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/07.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrea Guido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/08.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Jene Aiko</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/09.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Anna haek</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/10.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrean Puido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Những người online */}
            </div>
            <div
              className="tab-pane fade"
              id="girl"
              role="tabpanel"
              aria-labelledby="girl-tab"
            >
              <div className="grid-memberlist d-flex flex-wrap">
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/01.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Johanna</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/03.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Selinae </Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/05.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Jhon doe</Link>{" "}
                        </h6>
                        <p>Hoạt động 5 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/07.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrea Guido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/09.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Anna haek</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="boy"
              role="tabpanel"
              aria-labelledby="boy-tab"
            >
              <div className="grid-memberlist d-flex flex-wrap">
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/02.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrea Guido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/04.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Rocky deo</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/06.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Angelina</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/08.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Jene Aiko</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-member filter-item">
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src="assets/images/member/10.jpg"
                          alt="member-img"
                        />
                      </div>
                      <div className="lab-content">
                        <h6>
                          <Link to="/profile">Andrean Puido</Link>{" "}
                        </h6>
                        <p>Hoạt động 1 ngày</p>
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
  );
}

export default MemberTwoSection;
