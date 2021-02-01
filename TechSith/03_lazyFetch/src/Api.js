function fetchName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('John Doe');
    }, 5000);
  });
}

function fetchAddress() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('111 Barcelona, Spain');
    }, 5000);
  });
}

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;

  let suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

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

export function fetchData() {
  let namePromise = fetchName();
  let addressPromise = fetchAddress();

  return {
    namePromise: wrapPromise(namePromise),
    address: wrapPromise(addressPromise),
  };
}
