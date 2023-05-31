import React from "react";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <section
      className="page-header-section style-1"
      style={{ backgroundImage: "url(/assets/images/page-header.jpg)" }}
    >
      <div className="container">
        <div className="page-header-content">
          <div className="page-header-inner">
            <div className="page-title">
              <h2>Dating Online</h2>
            </div>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active"></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
