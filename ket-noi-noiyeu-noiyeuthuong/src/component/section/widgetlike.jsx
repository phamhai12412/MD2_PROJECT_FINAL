import React from "react";

function WidgetLikeSection() {
  return (
    <div className="widget like-member">
      <div className="widget-inner">
        <div className="widget-title">
          <h5>Bạn Có Thể Thích</h5>
        </div>
        <div className="widget-content">
          <div className="row row-cols-3 row-cols-sm-auto g-3">
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/01.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/02.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/03.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/04.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/05.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/06.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/07.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/08.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="image-thumb">
                <a style={{ cursor: "pointer" }}>
                  <img src="assets/images/widget/09.jpg" alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetLikeSection;
