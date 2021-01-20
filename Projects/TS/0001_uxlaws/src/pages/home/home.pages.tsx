import React from 'react';

// Components
import NavBar from '../../components/navbar/navbar.component';
import Poster from '../../components/poster/poster.component';

// Articles JSON
import articlesJSON from '../../articles.json';

interface IArticle {
  id: number;
  title: string;
  info: string;
}

const Home: React.FC = () => {
  const articles = articlesJSON.map((article: IArticle) => (
    <Poster
      key={article.id}
      id={article.id}
      title={article.title}
      info={article.info}
    />
  ));

  return (
    <div className="bg-black font-body">
      <NavBar />
      <div className="container mx-auto px-4">{articles}</div>
    </div>
  );
};

export default Home;
