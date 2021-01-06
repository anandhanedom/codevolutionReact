import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function DataFetching() {
  const [post, setPost] = useState<Partial<IPost>>({}); //PARTIAL
  const [id, setId] = useState<string>('1');
  const [idFromButtonClick, setIdFromButtonClick] = useState<string>('1');

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
      {/* {console.log(typeof id, typeof idFromButtonClick)} */}
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
