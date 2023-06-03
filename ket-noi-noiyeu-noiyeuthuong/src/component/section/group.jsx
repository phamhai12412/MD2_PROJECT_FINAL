import React, { useEffect, useState } from "react";
import GroupItem from "../items/groupitems";
import axios from "axios";

const subtitle = "Nhóm hoạt động gần đây";
const title = "Blog.vn";

function GroupSection() {
  const [GrouoListContent, setGrouoListContent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/GrouoListContent")
      .then((res) => setGrouoListContent(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="group-section padding-tb bg-img">
      <div className="container">
        <div className="section-header">
          <h4>{subtitle}</h4>
          <h2>{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4">
            <GroupItem MyGrouoList={GrouoListContent} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupSection;
