import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import { getArticles } from "../services/articleService";
import { Article } from "../types/article";

console.log(import.meta.env.VITE_MY_API_KEY);

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (newTopic: string) => {
    try {
      setArticles([]);
      setIsLoading(true);
      setIsError(false);
      const newArticles = await getArticles(newTopic);
      setArticles(newArticles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <p>Whoops, there was an error :(</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
