import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div className="b-ground-a d-flex justify-content-center">
      <div>
        <h2>Lista artykułów</h2>
        {articles.length === 0 ? (
          <p>Brak dostępnych artykułów.</p>
        ) : (
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
            
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Articles;