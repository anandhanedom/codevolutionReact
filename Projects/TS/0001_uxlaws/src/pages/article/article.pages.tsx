/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

// Components
import NavBar from '../../components/navbar/navbar.component';
import SideNav from '../../components/sideNav/sidenav.component';
import ArticleHero from '../../components/articleHero/articleHero.component';

// Articles JSON
// import articlesJSON from '../../articles.json';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends RouteComponentProps<{ id: string }> {}

const Articles: React.FC<IProps> = ({ match }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="font-body bg-black" style={{ color: '#f4f1d0' }}>
      {showNav ? (
        <SideNav toggleNav={toggleNav} />
      ) : (
        <div className="bg-black" style={{ color: '#fff' }}>
          <NavBar toggleNav={toggleNav} articleNav />
          <div
            className="py-28"
            style={{
              background: '#506485',
            }}
          >
            <ArticleHero
              id={+match.params.id}
              title="Aesthetic Usability Effect"
            />
          </div>
        </div>
      )}
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
            Users often perceive aesthetically pleasing design as design that’s
            more usable.
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
          <div className="mb-10 leading-8	text-left flex justify-between text-xl font-medium flex-wrap sm:flex-nowrap">
            <p className="pb-5 sm:w-1/3 pr-10">
              Aesthetically pleasing design can make users more tolerant of
              minor usability issues.
            </p>
            <p className="pb-5 sm:w-1/3 pr-10">
              Aesthetically pleasing design creates a positive response in
              people’s brains and leads them to believe the design actually
              works better.
            </p>
            <p className="pb-5 sm:w-1/3 pr-10">
              Aesthetically pleasing design can mask usability problems and
              prevent issues from being discovered during usability testing.
            </p>
          </div>
          <Link
            className="uppercase px-10 py-4 font-semibold tracking-widest mx-auto block md:inline md:mx-0"
            to="www.google.com"
            style={{ background: '#506485' }}
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
          <p className="leading-8	text-left text-xl font-medium">
            The aesthetic-usability effect was first studied in the field of
            human–computer interaction in 1995. Researchers Masaaki Kurosu and
            Kaori Kashimura from the Hitachi Design Center tested 26 variations
            of an ATM UI, asking the 252 study participants to rate each design
            on ease of use, as well as aesthetic appeal. They found a stronger
            correlation between the participants’ ratings of aesthetic appeal
            and perceived ease of use than the correlation between their ratings
            of aesthetic appeal and actual ease of use. Kurosu and Kashimura
            concluded that users are strongly influenced by the aesthetics of
            any given interface, even when they try to evaluate the underlying
            functionality of the system.
            <p>
              <u>Source</u>
            </p>
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Articles;
