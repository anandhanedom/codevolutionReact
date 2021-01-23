import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
    <div className="font-body">
      {showNav ? (
        <SideNav toggleNav={toggleNav} />
      ) : (
        <div>
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
    </div>
  );
};

export default Articles;
