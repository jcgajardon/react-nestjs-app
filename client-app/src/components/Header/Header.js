import React from "react";

import "./style.css";

const Header = () => {
  return (
    <div className="container-header animate__animated animate__slideInLeft ">
      <h1>HN Feed</h1>
      <h3>{`We ${"<"}3 hacker news!`}</h3>
    </div>
  );
};

export default Header;
