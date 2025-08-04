import { useState } from "react";
import { Toaster } from "sonner";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import SearchForm from "./SearchForm";
import ArticleList from "./ArticleList";
import { fetchArticles } from "../services/articleService";
import css from "./App.module.css";

export default function App() {
  const [searchTopic, setSearchTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", searchTopic, currentPage],
    queryFn: () => fetchArticles(searchTopic, currentPage),
    enabled: searchTopic !== "",
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.nbPages || 0;

  const handleSearch = (newTopic: string) => {
    setSearchTopic(newTopic);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />

      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          forcePage={currentPage - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
        />
      )}

      {isLoading && <strong>Loading data...</strong>}
      {isError && <strong>Error...</strong>}
      {data?.hits && <ArticleList items={data.hits} />}

      <Toaster position="top-right" duration={2000} />
    </>
  );
}
