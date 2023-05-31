import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function GroupItem(props) {
  const { MyGrouoList, ...otherProps } = props;

  return (
    <Fragment>
      {MyGrouoList.map((val, i) => (
        <div className="col-xl-6 col-12" key={i}>
          <div className="group-item lab-item">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
              </div>
              <div className="lab-content">
                <h4>{val.groupName}</h4>
                <p>{val.groupDesc} </p>
                <ul className="img-stack d-flex">
                  {val.groupMember.map((val, i) => (
                    <li key={i}>
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </li>
                  ))}
                  <li className="bg-theme">{val.moreCount}</li>
                </ul>
                <div className="test">
                  {" "}
                  <Link className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5"></i>
                    {val.groupBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default GroupItem;
