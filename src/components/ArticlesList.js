import React from "react";
import Article from "./Article";
import { useGlobalContext } from "../context";

export const ArticlesList = () => {
  const { articles } = useGlobalContext();

  return (
    <>
      <h2>Articles</h2>
      <div id="articles-list">
        {articles.map((article, id) => {
          return <Article key={id} {...article} />;
        })}
      </div>
    </>
  );
};

export default ArticlesList;
