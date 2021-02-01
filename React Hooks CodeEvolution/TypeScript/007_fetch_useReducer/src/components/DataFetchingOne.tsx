import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function DataFetchingOne() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [post, setPost] = useState<Partial<IPost>>({}); //PARTIAL

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      const data = res.data;

      console.log(data);

      setLoading(false);
      setPost(data);
      setError('');
    } catch (e) {
      setLoading(false);
      setPost({});
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Data Fetching One</h1>
      {loading ? <h2>{loading}</h2> : <h2>{post.title}</h2>}
      {error ? <h2>{error}</h2> : null}
    </div>
  );
}

export default DataFetchingOne;
