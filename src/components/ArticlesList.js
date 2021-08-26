import React from "react";
import Article from "./Article";
import { useGlobalContext } from "../context";

export const ArticlesList = () => {
  const { articles } = useGlobalContext();

  return (
    <section>
      <h2>Articles</h2>
      <div>
        {articles.map((article) => {
          return <Article {...article} />;
        })}
      </div>
    </section>
  );
};

export default ArticlesList;
