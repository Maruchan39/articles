import React, { useState, useContext, createContext, useEffect } from "react";
import apiKey from "./apiKey";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Supra");
  const [articles, setArticles] = useState([]);

  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=9&token=${apiKey}`;

  const fetchArticles = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const newArticles = data.articles.map((article) => {
        const { title, image, publishedAt, description } = article;
        return { title, image, publishedAt, description };
      });
      setArticles(newArticles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [query]);

  return (
    <AppContext.Provider value={{ articles, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
