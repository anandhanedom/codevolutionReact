import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      const data = res.data;

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
      {loading ? <h2>{loading}</h2> : <h2>{post.title}</h2>}
      {error ? <h2>{error}</h2> : null}
    </div>
  );
}

export default DataFetchingOne;
