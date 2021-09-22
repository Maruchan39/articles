import React from "react";

const Article = ({ title, description, publishedAt, image, url }) => {
  return (
    <article className="article" onClick={() => window.open(url, "_blank")}>
      <h2 id="article-title">{title}</h2>
      <div id="image-container">
        <img src={image} alt="article-image" id="image" />
      </div>
      <p id="article-date">Published at: {publishedAt.substring(0, 10)}</p>
      <p id="article-description">{description}</p>
    </article>
  );
};

export default Article;
