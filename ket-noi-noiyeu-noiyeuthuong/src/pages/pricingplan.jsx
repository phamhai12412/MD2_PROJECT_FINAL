import React from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import FooterSection from "../component/layout/footer";

const title = "Chọn gói giá của chúng tôi";
const subtitle = "Membership Levels";

let PricingListContent = [
  {
    title: "Basic package",
    price: "$29.00",
    desc: "$29.00 per month and then $290.00 per year.",
    btnText: "Purchase Now",
    banifitList: [
      {
        icon: "icofont-check-circled",
        text: "Xem các bài viết",
      },
      {
        icon: "icofont-check-circled",
        text: "Xem hồ sơ thành viên",
      },
      {
        icon: "icofont-check-circled",
        text: "Gửi tin nhắn cá nhân",
      },
      {
        icon: "icofont-close-circled",
        text: "Tạo nhóm",
      },
      {
        icon: "icofont-close-circled",
        text: "Truy cập vào các nhóm",
      },
      {
        icon: "icofont-close-circled",
        text: "Nhắc nhở sự kiện quan trọng ",
      },
      {
        icon: "icofont-close-circled",
        text: "Thêm tiện ích vào hồ sơ của bạn",
      },
    ],
  },
  {
    title: "Silver Package",
    price: "$35.00",
    desc: "$35.00 per month and then $350.00 per year.",
    btnText: "Purchase Now",
    banifitList: [
      {
        icon: "icofont-check-circled",
        text: "Xem các bài viết",
      },
      {
        icon: "icofont-check-circled",
        text: "Xem hồ sơ thành viên",
      },
      {
        icon: "icofont-check-circled",
        text: "Gửi tin nhắn cá nhân",
      },
      {
        icon: "icofont-check-circled",
        text: "Tạo nhóm",
      },
      {
        icon: "icofont-check-circled",
        text: "Truy cập vào các nhóm",
      },
      {
        icon: "icofont-close-circled",
        text: "Nhắc nhở sự kiện quan trọng ",
      },
      {
        icon: "icofont-close-circled",
        text: "Thêm tiện ích vào hồ sơ của bạn",
      },
    ],
  },
  {
    title: "Gold Package",
    price: "$40.00",
    desc: "$40.00 per month and then $400.00 per year.",
    btnText: "Purchase Now",
    banifitList: [
      {
        icon: "icofont-check-circled",
        text: "Xem các bài viết",
      },
      {
        icon: "icofont-check-circled",
        text: "Xem hồ sơ thành viên",
      },
      {
        icon: "icofont-check-circled",
        text: "Gửi tin nhắn cá nhân",
      },
      {
        icon: "icofont-check-circled",
        text: "Tạo nhóm",
      },
      {
        icon: "icofont-check-circled",
        text: "Truy cập vào các nhóm",
      },
      {
        icon: "icofont-check-circled",
        text: "Nhắc nhở sự kiện quan trọng ",
      },
      {
        icon: "icofont-check-circled",
        text: "Thêm tiện ích vào hồ sơ của bạn",
      },
    ],
  },
];

function PricingPlanPage() {
  return (
    <div>
      <Header />

      <section className="pricing-section padding-tb">
        <div className="container">
          <div className="section-header">
            <h4 className="theme-color">{subtitle}</h4>
            <h2>{title}</h2>
          </div>
          <div className="section-wrapper mt-4">
            <div className="pricing-plan-wrapper">
              <div className="row gx-2 gy-3 justify-content-center">
                {PricingListContent.map((val, i) => (
                  <div className="col-lg-4 col-sm-6" key={i}>
                    <div className="price-item">
                      <div className="price-item-inner">
                        <div className="price-top">
                          <h6>{val.title}</h6>
                          <h2>{val.price}</h2>
                          <p>{val.desc}</p>
                        </div>
                        <div className="price-bottom">
                          <ul>
                            {val.banifitList.map((val, i) => (
                              <li key={i}>
                                <i className={`${val.icon}`}></i>
                                <p>{val.text}</p>
                              </li>
                            ))}
                          </ul>
                          <a href="/login" className="purchase-btn">
                            {val.btnText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default PricingPlanPage;
