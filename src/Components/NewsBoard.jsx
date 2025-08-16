import React, { useState, useEffect } from "react";   
import NewsItem from "./NewsItem"; 

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
    
   useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles || []));
}, [category]); 


  return (
    <div className="container-fluid">
  <h2 className="text-center my-4 fw-bold">
  <span className="text-dark border-bottom border-3 border-danger pb-1">
    Latest News
  </span>
</h2>

  <div className="row">
    {articles.map((news, index) => (
      <div className="col-md-3" key={index}>
        <NewsItem
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      </div>
    ))}
  </div>
</div>




  )
}

export default NewsBoard
