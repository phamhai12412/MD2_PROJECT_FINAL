import React from "react";

const subTitle = "Tải xuống ứng dụng Dating Online của chúng tôi";
const Title = "Dễ dàng kết nối với mọi người";
const desc =
  "Bạn tìm thấy chúng tôi, cuối cùng, và bạn đã yêu. Hơn 5.000.000 trên khắp thế giới đã chia sẻ cùng trải nghiệm và đang sử dụng hệ thống của chúng tôi Tham gia cùng chúng tôi hôm nay trở nên dễ dàng hơn!";

let AppListContent = [
  {
    imgUrl: "assets/images/app/apple.png",
    imgAlt: "App Thumb",
    title: "App Store",
    desc: "Tải xuống",
  },
  {
    imgUrl: "assets/images/app/playstore.png",
    imgAlt: "App Thumb",
    title: "Google Play",
    desc: "Tải xuống",
  },
];

function AppsSection() {
  return (
    <section className="app-section bg-theme">
      <div className="container">
        <div className="section-wrapper padding-tb">
          <div className="app-content">
            <h4>{subTitle}</h4>
            <h2>{Title} </h2>
            <p>{desc}</p>
            <ul className="app-download d-flex flex-wrap">
              {AppListContent.map((val, i) => (
                <li key={i}>
                  <a
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-wrap align-items-center"
                  >
                    <div className="app-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="app-content">
                      <p>{val.desc}</p>
                      <h4>{val.title}</h4>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-app">
            <img src="assets/images/app/mobile-view.png" alt="mbl-view" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppsSection;
