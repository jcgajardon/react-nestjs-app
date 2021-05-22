import { axiosClient } from "../config/axios";

export const getNews = async () => {
  const response = await axiosClient.get(`/api/news`);

  const { data } = response;

  return data;
};
