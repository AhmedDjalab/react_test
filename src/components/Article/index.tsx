import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardHeader,
  Avatar,
  Rating,
} from "@mui/material";
import { Article } from "../../services/api";
import {
  StarredContext,
  StarredContextProps,
} from "../../context/starred_context";

interface ArticleProps extends Article {
  isStarred?: boolean;
}

function NewsArticle({
  id,
  imageUrl,
  newsSite,
  publishedAt,
  title,
  summary,
}: ArticleProps) {
  let { starredItemsIds, updateStarred } = React.useContext(
    StarredContext
  ) as StarredContextProps;
  let data = starredItemsIds.includes(id!);

  const handleStarredChange = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    updateStarred(id);
  };

  return (
    <Card key={id} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
      <CardHeader
        sx={{
          display: "flex",
          flex: 1,
        }}
        avatar={<Avatar src={imageUrl} />}
        title={newsSite}
        subheader={publishedAt}
      />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <CardContent sx={{ flex: "1" }}>
          <Rating
            name="customized-10"
            max={1}
            value={data ? 1 : 0}
            onClick={(e) => handleStarredChange(e)}
          />
          <Typography data-testid="article_title" component="div" variant="h5">
            {title}
          </Typography>
          <Typography component="div">{summary}</Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{
            height: 128,
            maxWidth: 128,
            padding: 2,
            objectFit: "cover",
          }}
          image={imageUrl}
        />
      </Box>
    </Card>
  );
}

export default NewsArticle;
