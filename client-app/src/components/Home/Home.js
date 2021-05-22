import React from "react";

import { useFetchNews } from "../../hooks/useFetchNews";

import Header from "../Header";

import List from "../List";
import Alert from "../Alert/Alert";
import Loading from "../../Loading";

import "./style.css";

const Home = () => {
  const [state, refetch] = useFetchNews();
  const { data, loading, error } = state;

  return (
    <>
      <Header />
      {error && (
        <Alert type={error && "error"} message="An error has occurred" />
      )}
      {!loading ? <List news={data} refetch={refetch} /> : <Loading />}
    </>
  );
};

export default Home;
