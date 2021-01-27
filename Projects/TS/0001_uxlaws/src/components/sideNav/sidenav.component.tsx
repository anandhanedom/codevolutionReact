import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// Articles JSON
import articlesJSON from '../../articles.json';

interface IArticle {
  id: number;
  title: string;
  info: string;
}

interface IProps extends RouteComponentProps {
  toggleNav: () => void;
}

const SideNav: React.FC<IProps> = ({ toggleNav, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = articlesJSON.map((article: IArticle) => (
    <li key={article.id} className="mb-7 mt-3">
      <button
        type="button"
        onClick={() => {
          toggleNav();
          history.push(`/articles/${article.id}`);
        }}
        className="flex items-center"
      >
        <div className="inline-block text-sm font-body1 text-gray-300">
          {article.id < 10 ? `0${article.id}` : article.id}
        </div>
        <div className="text-2xl font-bold inline-block ml-7 hover:text-white pr-10 md:pr-20 text-left">
          {article.title}
        </div>
      </button>
    </li>
  ));

  return (
    <div className="bg-black relative" style={{ color: '#f4f1d0' }}>
      <button
        type="button"
        className="absolute top-3 focus:outline-none z-20"
        onClick={toggleNav}
      >
        <div className="fixed right-3">
          <svg
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div className="py-10 px-5 flex flex-col md:flex-row container mx-auto max-w-screen-lg w-screen relative z-10 overflow-y-scroll">
        <div className="md:w-1/2 mb-20 md:mb-0">
          <ul>{options}</ul>
        </div>
        <div className="md:w-1/2">
          <article className="pr-10 md:pr-20">
            <h1 className="text-3xl font-bold mb-2">Overview</h1>
            <p className="mb-6 text-lg font-body1">
              Laws of UX is a collection of the maxims and principles that
              designers can consider when building user interfaces. It was
              created by Jon Yablonski.
            </p>
          </article>
          <article className="pr-10 md:pr-20">
            <h1 className="text-3xl font-bold mb-2">The Book</h1>
            <p className="mb-6 text-lg font-body1">
              An expansion of the ideas found on this site is now available in
              book form, titled &nbsp;
              <u>
                Laws of UX : Using Psychology to Design Better Products and
                Services
              </u>
              . Translated editions of the book are available in <u>German</u>
              &nbsp; and <u>Korean</u>.
            </p>
          </article>
          <article className="pr-10 md:pr-20">
            <h1 className="text-3xl font-bold mb-2">Posters</h1>
            <p className="mb-6 text-lg font-body1">
              High-resolution posters are available for purchase via &nbsp;
              <u>The Online Store of Jon Yablonski</u>
            </p>
          </article>
          <article className="pr-10 md:pr-20">
            <h1 className="text-3xl font-bold mb-2">Colophon</h1>
            <p className="mb-6 text-lg font-body1">
              Tools used to create this site include paper, pencil and Sketch
              App for design, Gulp for development workflow automation, Sass for
              CSS preprocessing, and Nunjucks for templating. Typography is set
              in IBM Plex Sans and Plex Mono, an open-source typeface by IBM.
            </p>
          </article>
          <article className="pr-10 md:pr-20 mb-6">
            <span className="text-base font-body1">
              &copy; Jon Yablonski 2021 | All Rights Reserved
            </span>
          </article>
          <hr className="mr-20 mb-6" />
          <article className="flex flex-col md:flex-row pr-20 text-base font-body1 pb-6">
            <span>
              <svg
                className="inline mb-5 md:mb-0"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </span>

            <span className="underline uppercase md:ml-5 mb-5 md:mb-0">
              Twitter
            </span>
            <span className="underline uppercase md:ml-5 mb-5 md:mb-0">
              Facebook
            </span>
            <span className="underline uppercase md:ml-5 mb-5 md:mb-0">
              Linkedin
            </span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideNav);
