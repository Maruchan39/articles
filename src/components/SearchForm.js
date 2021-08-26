import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setQuery, query } = useGlobalContext();
  const searchValue = useRef("");

  const searchArticle = () => {
    setQuery(searchValue.current.value);
  };

  const queryValidity = new RegExp("^[a-zA-Z0-9 ]*$");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      {queryValidity.test(query) || (
        <p>Please only use alphanumericals or whitespace</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="article">Search for articles</label>
        <input
          type="text"
          id="article"
          ref={searchValue}
          onChange={searchArticle}
          maxLength="40"
          pattern={queryValidity}
        />
      </form>
    </section>
  );
};

export default SearchForm;
