import React from "react";
import image from "../assets/news.webp";
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3" style={{ width: "100%" }}>
  <img
    src={src ? src : image}
    className="card-img-top"
    style={{ height: "200px", objectFit: "cover" }}
    alt="news"
  />
  <div className="card-body">
    <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled"}</h5>
    <p className="card-text">
      {description ? description.slice(0, 90) : "This news is updating..."}
    </p>
    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
      Read More
    </a>
  </div>
</div>

  )
}

export default NewsItem
