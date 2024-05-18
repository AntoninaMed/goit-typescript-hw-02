import axios from "axios";
import { UnsplashResponse } from "./APIService.types";

const API_KEY = "ZD_Sb3ssY8HzAX_0ucqPUSH3y7REjp4dZsyEqMw4JO4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get("search/photos", {
    params: {
      query: query,
      page: page,
    },
  });

  return response.data;
};