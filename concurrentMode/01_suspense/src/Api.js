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

const wrapPromise = (promise) => {
  // Set the initial status
  let status = 'pending';

  // Store results
  let result;

  let suspender = promise
    .then((res) => {
      status = 'success';
      result = res;
    })
    .catch((err) => {
      status = 'error';
      result = err;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();

  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
};
