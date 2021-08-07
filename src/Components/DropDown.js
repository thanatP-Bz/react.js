import React from "react";

const DropDown = ({ options }) => {
  const renderOptions = options.map((option) => {
    return <div key={option.value}></div>;
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select the color</label>
        <div className="ui selcection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select Color</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
