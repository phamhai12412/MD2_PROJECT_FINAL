import React from "react";
import { Link } from "react-router-dom";

const subtitle = "Những chuyện tình ngọt ngào";
const title =
  "Những câu chuyện tình yêu, từ những người yêu thích của chúng tôi";

let StoryContentList = [
  {
    imgUrl: "assets/images/story/01.jpg",
    imgAlt: "Story Thumb",
    title: "Điều kì diệu",
    desc: "Một sự thanh thản kỳ diệu đã xâm chiếm toàn bộ tâm hồn tôi giống như những buổi sáng ngọt ngào",
    btnText: "Đọc thêm",
  },
  {
    imgUrl: "assets/images/story/02.jpg",
    imgAlt: "Story Thumb",
    title: "Gặp em ở Pari",
    desc: "Một sự thanh thản kỳ diệu đã xâm chiếm toàn bộ tâm hồn tôi giống như những buổi sáng ngọt ngào",
    btnText: "Đọc thêm",
  },
  {
    imgUrl: "assets/images/story/03.jpg",
    imgAlt: "Story Thumb",
    title: "Blog.vn bắt đầu tình yêu của chúng tôi",
    desc: "Một sự thanh thản kỳ diệu đã xâm chiếm toàn bộ tâm hồn tôi giống như những buổi sáng ngọt ngào",
    btnText: "Đọc thêm",
  },
];

function StorySection() {
  return (
    <section className="story-section padding-tb bg-img">
      <div className=" container">
        <div className="section-header">
          <h4>{subtitle}</h4>
          <h2>{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-4">
            {StoryContentList.map((val, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <Link to="/blog-single">{val.title}</Link>
                      </h4>
                      <p>{val.desc}</p>
                      <Link to="/blog-single" className="lab-btn">
                        <i className="icofont-circled-right"></i>
                        {val.btnText}
                      </Link>
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

export default StorySection;
