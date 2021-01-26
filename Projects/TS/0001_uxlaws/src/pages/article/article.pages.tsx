/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

// Components
import NavBar from '../../components/navbar/navbar.component';
import SideNav from '../../components/sideNav/sidenav.component';
import ArticleHero from '../../components/articleHero/articleHero.component';
import ArticleFooter from '../../components/articleFooter/articleFooter.component';

// Articles JSON
import articlesJSON from '../../articles.json';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends RouteComponentProps<{ id: string }> {}

interface IReading {
  title: string;
  author: string;
}

interface IArticle {
  id: number;
  color: string;
  info: string;
  takeaways: string[];
  origins: string;
  title: string;
  reading: IReading[];
}

const Articles: React.FC<IProps> = ({ match }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const currentArticle: IArticle = articlesJSON[+match.params.id - 1];

  return (
    <div className="font-body bg-black" style={{ color: '#f4f1d0' }}>
      {showNav ? (
        <SideNav toggleNav={toggleNav} />
      ) : (
        <div className="bg-black" style={{ color: '#fff' }}>
          <NavBar
            toggleNav={toggleNav}
            articleNav
            prevId={
              +match.params.id === 1
                ? articlesJSON.length
                : +match.params.id - 1
            }
            nextId={
              +match.params.id < articlesJSON.length
                ? articlesJSON[+match.params.id].id
                : 1
            }
          />
          <div
            className="py-28"
            style={{
              background: currentArticle.color,
            }}
          >
            <ArticleHero id={currentArticle.id} title={currentArticle.title} />
          </div>
        </div>
      )}
      {showNav ? null : (
        <div>
          <div className="container mx-auto px-4">
            <div className="py-10 max-w-5xl mx-auto">
              <h2 className="mb-8">
                <span
                  style={{
                    height: '1px',
                    backgroundColor: '#f4f1d0',
                  }}
                  className="inline-block w-5 align-middle"
                ></span>
                &nbsp;
                <span className="ml-1 uppercase tracking-widest text-sm">
                  Overview
                </span>
              </h2>
              <p className="text-xl leading-6	sm:text-4xl font-bold text-left pr-5">
                {currentArticle.info}
              </p>
            </div>
            <div className="py-10 max-w-5xl mx-auto">
              <h2 className="mb-8">
                <span
                  style={{
                    height: '1px',
                    backgroundColor: '#f4f1d0',
                  }}
                  className="inline-block w-5 align-middle"
                ></span>
                &nbsp;
                <span className="ml-1 uppercase tracking-widest text-sm">
                  Key Takeaways
                </span>
              </h2>
              <div className="mb-20 leading-8	text-left flex justify-between text-xl font-medium flex-wrap sm:flex-nowrap">
                {currentArticle.takeaways.map((takeaway, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={i} className="pb-5 sm:min-w-1/3 pr-10">
                    {takeaway}
                  </p>
                ))}
              </div>
              <Link
                className="text-center uppercase px-10 py-4 font-semibold tracking-widest mx-auto block md:inline md:mx-0"
                to="/"
                style={{ background: currentArticle.color }}
              >
                Download The Poster
              </Link>
            </div>
            <div className="pb-10 pt-20 max-w-5xl mx-auto">
              <h2 className="mb-8">
                <span
                  style={{
                    height: '1px',
                    backgroundColor: '#f4f1d0',
                  }}
                  className="inline-block w-5 align-middle"
                ></span>
                &nbsp;
                <span className="ml-1 uppercase tracking-widest text-sm">
                  Origins
                </span>
              </h2>
              <div className="leading-8	text-left text-xl font-medium">
                {currentArticle.origins}
                <p className="mt-4">
                  <u>Source</u>
                </p>
              </div>
            </div>
            <div className="pb-10 pt-20 max-w-5xl mx-auto">
              <h2 className="mb-8">
                <span
                  style={{
                    height: '1px',
                    backgroundColor: '#f4f1d0',
                  }}
                  className="inline-block w-5 align-middle"
                ></span>
                &nbsp;
                <span className="ml-1 uppercase tracking-widest text-sm">
                  Further Reading
                </span>
              </h2>
              <div className="mb-20 leading-8	text-left text-xl font-medium">
                <ul>
                  {currentArticle.reading.map((read, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i} className="mb-10">
                      <h2 className="font-bold text-4xl mb-2">
                        <u>{read.title}</u>
                      </h2>
                      <p>{read.author}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {currentArticle.id < articlesJSON.length ? (
            <div
              style={{
                background: articlesJSON[+match.params.id].color,
              }}
            >
              <div className="container mx-auto px-4">
                <ArticleFooter
                  nextId={articlesJSON[+match.params.id].id}
                  title={articlesJSON[+match.params.id].title}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                background: articlesJSON[0].color,
              }}
            >
              <div className="container mx-auto px-4">
                <ArticleFooter nextId={1} title={articlesJSON[0].title} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Articles;
