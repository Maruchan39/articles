import React from "react";
import ArticlesList from "../components/ArticlesList";
import SearchForm from "../components/SearchForm";

export const Home = () => {
  return (
    <div>
      <SearchForm />
      <ArticlesList />
    </div>
  );
};

export default Home;
