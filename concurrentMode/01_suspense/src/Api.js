import axios from 'axios';

const fetchUser = () => {
  console.log('Fetching user...');

  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const fetchPosts = () => {
  console.log('Fetching posts...');

  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const wrapPromise = () => {
  // Set the initial status
  let status = 'pending';
};

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();

  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
};
