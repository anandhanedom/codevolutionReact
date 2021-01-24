import React, { useState } from 'react';

// Components
import NavBar from '../../components/navbar/navbar.component';
import Poster from '../../components/poster/poster.component';
import SideNav from '../../components/sideNav/sidenav.component';

// Articles JSON
import articlesJSON from '../../articles.json';

interface IArticle {
  id: number;
  title: string;
  info: string;
  color: string;
}

const Home: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const articles = articlesJSON.map((article: IArticle) => (
    <Poster
      key={article.id}
      id={article.id}
      title={article.title}
      info={article.info}
      color={article.color}
    />
  ));

  return (
    <div className="bg-black font-body">
      {showNav ? (
        <SideNav toggleNav={toggleNav} />
      ) : (
        <div>
          <NavBar toggleNav={toggleNav} articleNav={false} />
          <div className="container mx-auto px-4">{articles}</div>
          <div className="container py-12">
            <button
              style={{ color: '#f4f1d0' }}
              onClick={scrollUp}
              type="button"
              className="focus:outline-none mx-auto flex items-center p-4 uppercase font-body1 font-medium tracking-widest"
            >
              <svg
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7l4-4m0 0l4 4m-4-4v18"
                />
              </svg>
              <span className="ml-3">Back to Top</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
