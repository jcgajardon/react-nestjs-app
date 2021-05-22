import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Alert = ({ type, message }) => {
  const backGroundColor =
    type === "error" ? "#FF7F7F" : type === "success" ? "green" : "gray";

  return (
    <div className="alert" style={{ backgroundColor: backGroundColor }}>
      <p>{message}</p>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
