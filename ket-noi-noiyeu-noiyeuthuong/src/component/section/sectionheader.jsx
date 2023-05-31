import React from "react";

const SectionHeader = (props) => {
  return (
    <div className={props.alignment ? props.alignment : ""}>
      {props.title}
      {props.subtitle}
    </div>
  );
};

export default SectionHeader;
