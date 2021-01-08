import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> {}

const Post: React.FC<Props> = ({ match }) => {
  console.log(match);

  // useEffect(() => {
  //   fetch(`api.example.com/posts/${match.params.id}`);
  // }, [match.params.id]);

  return (
    <div style={{ padding: '10px' }}>
      <h1>Post {match.params.id}</h1>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Post;
