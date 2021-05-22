import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";
import { VscTrash } from "react-icons/vsc";
import { axiosClient } from "../../config/axios";

import { formatDate, openInNewTab } from "../../utils";

import "./style.css";

const ItemList = ({ item, refetch, setAlert }) => {
  const { _id, story_title, title, author, created_at, story_url, url } = item;

  const deleteItem = async (newID) => {
    try {
      //delete item method
      await axiosClient.delete(`/api/news?newID=${newID}`);

      //show alert success
      setAlert({
        show: true,
        message: "The news has been deleted",
        type: "success",
      });

      //reload data hook fetch
      refetch({});
    } catch (error) {
      //show alert error
      setAlert({
        show: true,
        message: "The news has been deleted",
        type: "error",
      });
    }

    //remove alert after 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="item">
        <Row center="xs">
          <Col
            xs={8}
            sm={3}
            md={2}
            lg={8}
            onClick={() => openInNewTab(story_url ? story_url : url)}
            style={{ display: "flex" }}
          >
            <p className="title">{`${
              !story_title && !title ? "" : story_title ? story_title : title
            }`}</p>{" "}
            <p className="author"> {`-${author}-`}</p>
          </Col>
          <Col
            xs={2}
            sm={6}
            md={8}
            lg={2}
            onClick={() => openInNewTab(story_url ? story_url : url)}
          >
            <p>{formatDate(created_at)}</p>
          </Col>
          <Col xs={2} sm={3} md={2} lg={2}>
            <p>
              <VscTrash className="icon" onClick={() => deleteItem(_id)} />
            </p>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

ItemList.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func,
  setAlert: PropTypes.func
};

export default ItemList;
