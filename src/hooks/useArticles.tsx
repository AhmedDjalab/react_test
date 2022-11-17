/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Api, Article } from "../services/api";

interface UseArticlesProps {
  search: string;
  page: number;
  rowsPerPage: number;
}
const client = new Api();

export const UseArticles = ({
  search,
  page,
  rowsPerPage,
}: UseArticlesProps) => {
  const [articles, setArticles] = React.useState<Article[]>([]);

  const getArticles = React.useCallback(() => {
    client.articles
      .articlesList({
        title_contains: search,
        _start: page * rowsPerPage,
        _limit: rowsPerPage,
      })
      .then(({ data }) => {
        setArticles(data);
      });
  }, [page, rowsPerPage]);

  React.useEffect(() => {
    getArticles();
  }, [getArticles, page, search]);

  return {
    getArticles,
    setArticles,
    articles,
  };
};
