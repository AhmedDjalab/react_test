import { Article } from "../../services/api";
import NewsArticle from "../Article";

interface ArticlesProps {
  articles: Article[];
}

function Articles({ articles }: ArticlesProps) {
  return (
    <div>
      {articles.map((article) => (
        <NewsArticle {...article} key={article.id} />
      ))}
    </div>
  );
}

export default Articles;
