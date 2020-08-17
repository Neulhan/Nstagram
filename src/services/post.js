import Api from "./Api";
import axios from "axios";

export const getPostList = async () => {
  const response = await axios.get("https://api.neulhan.com/v1/posts");
  return Promise.resolve(response.data);

  try {
    const response = await Api.get("/posts");
    return response;
  } catch (error) {
    console.error(error);
  }
};
