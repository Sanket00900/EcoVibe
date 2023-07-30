import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import HorizontalCard from "../components/HorizontalCard";

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchRenewableEnergyNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=renewable+energy&apiKey=${apiKey}`
        );
        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchRenewableEnergyNews();
  }, [apiKey]);

  return (
    <>
      <div className="bg-bg">
        <Navbar />
        <h2 className="text-2xl text-blue-300 uppercase m-3 text-center">
          Stay Updated with Latest Renewable Energy News
        </h2>
        <div className="flex flex-col items-center">
          {newsArticles.map((article) => (
            <HorizontalCard
              key={article.title}
              title={article.title}
              description={article.content}
              imageUrl={article.urlToImage}
              newsUrl={article.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
