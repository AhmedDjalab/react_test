import React from "react";
import { Box, TablePagination } from "@mui/material";
import Articles from "../../components/Articles";
import { Search as SeachComponent } from "../../components/Search";
import { UseArticles } from "../../hooks/useArticles";

export const Home = () => {
  let [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const { setArticles, articles } = UseArticles({
    search,
    page,
    rowsPerPage,
  });

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleSearch = () => {
    setArticles(
      articles.filter((article) =>
        article.title?.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 2,
          justifyContent: "space-between",
        }}
      >
        <SeachComponent
          data-testid="search_testId"
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        <Box sx={{ px: 2, border: "1px solid red" }}>
          {/* this MUI compenent accepte just values `10`, `25`, `50`, `100`. 
           so for this task we will ignore the warning and that it dosn't show 
           the pages numbers 
           -- for another time we can build a custom compenent for pagination
          */}
          <TablePagination
            count={10}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
          />
        </Box>
      </Box>
      <Articles articles={articles} />
    </>
  );
};
