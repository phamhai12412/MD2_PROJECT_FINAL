import React from "react";

function PaginaTion() {
  return (
    <div className="paginations">
      <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
        <li>
          <a>
            <i className="icofont-rounded-double-left"></i>
          </a>
        </li>
        <li>
          <a>1</a>
        </li>
        <li className="d-none d-sm-block">
          <a>2</a>
        </li>
        <li>
          <a>...</a>
        </li>
        <li className="d-none d-sm-block">
          <a>4</a>
        </li>
        <li>
          <a>5</a>
        </li>
        <li>
          <a>
            <i className="icofont-rounded-double-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PaginaTion;
