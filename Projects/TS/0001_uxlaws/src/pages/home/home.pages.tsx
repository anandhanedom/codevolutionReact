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
      // eslint-disable-next-line react/jsx-boolean-value
      // eslint-disable-next-line no-unneeded-ternary
      rev={false}
    />
  ));

  return (
    <div className="bg-black">
      <NavBar />
      <div className="container mx-auto px-4">{articles}</div>
    </div>
  );
};

export default Home;
