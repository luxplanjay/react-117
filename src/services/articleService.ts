import axios from "axios";
import { Article } from "../types/article";

interface GetArticlesResponse {
  hits: Article[];
}

export const getArticles = async (topic: string) => {
  const response = await axios.get<GetArticlesResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return response.data.hits;
};
