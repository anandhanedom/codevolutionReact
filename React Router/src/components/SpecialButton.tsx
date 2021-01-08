import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const SpecialButton: React.FC<Props> = ({ history }) => {
  return (
    <button
      style={{ display: 'block' }}
      onClick={() => {
        history.push('/posts/special');
      }}
    >
      Go to special page
    </button>
  );
};

export default withRouter(SpecialButton);
