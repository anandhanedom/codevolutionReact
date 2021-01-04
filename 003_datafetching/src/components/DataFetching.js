import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
        );

        console.log(res);

        setPost(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
