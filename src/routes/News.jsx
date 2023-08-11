import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import HorizontalCard from "../components/HorizontalCard";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const News = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [news, setNews] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios
          .get(
            `https://gnews.io/api/v4/search?q=Renewable%20energy&token=${apiKey}&lang=en`
          )
          .then((response) => {
            setNews(response.data.articles);
          });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  console.log(news);

  return (
    <>
      <div className="bg-bg">
        <Navbar />
        <div>
          <h2 className="text-2xl text-blue-300 uppercase m-3 text-center">
            Stay Updated with Latest Renewable Energy News
          </h2>
          <div className="flex flex-col items-center">
            {news.map((article, index) => (
              <HorizontalCard
                key={article.index}
                title={article.title}
                imageUrl={article.image}
                description={article.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
