import React from "react";

const title = "Bạn chỉ còn 3 bước nữa là đến một buổi hẹn hò tuyệt vời";
const subtitle = "Làm thế nào nó hoạt động?";

let WorkListContent = [
  {
    imgUrl: "assets/images/work/01.png",
    imgAlt: "work thumb",
    step: "step",
    stepCount: "01",
    title: "Create A Profile",
  },
  {
    imgUrl: "assets/images/work/02.png",
    imgAlt: "work thumb",
    step: "step",
    stepCount: "02",
    title: "Find Matches",
  },
  {
    imgUrl: "assets/images/work/03.png",
    imgAlt: "work thumb",
    step: "step",
    stepCount: "03",
    title: "Start Dating",
  },
];

function WorkSection() {
  return (
    <section className="work-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">{subtitle}</h4>
          <h2>{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-5">
            {WorkListContent.map((val, i) => (
              <div className="col-lg-4 col-sm-6 col-12 px-4" key={i}>
                <div className="lab-item work-item">
                  <div className="lab-inner text-center">
                    <div className="lab-thumb">
                      <div className="thumb-inner">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        <div className="step">
                          <span>{val.step}</span>
                          <p>{val.stepCount}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lab-content">
                      <h4>{val.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
