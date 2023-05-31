import React from "react";
import { Link } from "react-router-dom";

const title = "join the group";

let WidgetGroupContentList = [
  {
    gName: "Active Group A1",
    gDesc:
      "Colabors atively fabcate best breed and apcations through visionary",
    btnText: "View Group",
    gCount: "12+",
    gImgList: [
      {
        imgUrl: "assets/images/group/group-mem/01.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/02.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/03.png",
        imgAlt: "Group Member",
      },
    ],
  },
  {
    gName: "Active Group A2",
    gDesc:
      "Colabors atively fabcate best breed and apcations through visionary",
    btnText: "View Group",
    gCount: "12+",
    gImgList: [
      {
        imgUrl: "assets/images/group/group-mem/01.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/02.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/03.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/04.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/05.png",
        imgAlt: "Group Member",
      },
      {
        imgUrl: "assets/images/group/group-mem/06.png",
        imgAlt: "Group Member",
      },
    ],
  },
];

function WidgetGroupSection() {
  return (
    <div className="widget active-group">
      <div className="widget-inner">
        <div className="widget-title">
          <h5>{title}</h5>
        </div>
        <div className="widget-content">
          {WidgetGroupContentList.map((val, i) => (
            <div className="group-item lab-item" key={i}>
              <div className="lab-inner d-flex flex-wrap align-items-center">
                <div className="lab-content w-100">
                  <h6>{val.gName}</h6>
                  <p>{val.gDesc}</p>
                  <ul className="img-stack d-flex">
                    {val.gImgList.map((val, i) => (
                      <li key={i}>
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </li>
                    ))}
                    <li className="bg-theme">{val.gCount}</li>
                  </ul>
                  <div className="test">
                    {" "}
                    <Link to="/profile" className="lab-btn">
                      <i className="icofont-users-alt-5"></i>
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
  );
}

export default WidgetGroupSection;
