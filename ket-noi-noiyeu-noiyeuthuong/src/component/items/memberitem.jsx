import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function MemberItem(props) {
  const navigate = useNavigate();

  const { AllMemberListContent, ...otherProps } = props;
  console.log(AllMemberListContent);
  const setview = (id) => {
    localStorage.setItem("xembanbe", id);
    navigate("/friend");
  };
  return (
    <Fragment>
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
                  <Link to="/profile">{val.usename}</Link>{" "}
                </h6>
                <p>{val.memActive}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default MemberItem;
