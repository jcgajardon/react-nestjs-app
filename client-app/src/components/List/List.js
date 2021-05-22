import React, { useState } from "react";
import PropTypes from "prop-types";
import ItemList from "../ItemList";

import Alert from "../Alert";

import "./style.css";

const List = ({ news, refetch }) => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const { show, message, type } = alert;

  return (
    <div className="list animate__animated animate__fadeIn">
      {show && <Alert type={type} message={message} />}
      {news.map((item) => (
        <ItemList
          item={item}
          refetch={refetch}
          key={item._id}
          setAlert={setAlert}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  news: PropTypes.array,
  refetch: PropTypes.func,
};

export default List;
