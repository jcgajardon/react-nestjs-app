import { useState, useEffect } from "react";
import { getNews } from "../helpers/getNews";

export const useFetchNews = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    getNews()
      .then((news) => {
        setState({
          data: news,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          data: [],
          loading: false,
          error: true,
        });
      });
  }, [shouldRefetch]);

  return [state, refetch];
};
