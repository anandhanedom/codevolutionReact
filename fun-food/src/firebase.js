import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBDS2aSI3zl1mJkQuWona8eSShrQZ-X8wQ',
  authDomain: 'fun-food-mates.firebaseapp.com',
  projectId: 'fun-food-mates',
  storageBucket: 'fun-food-mates.appspot.com',
  messagingSenderId: '584556342867',
  appId: '1:584556342867:web:45bde8595bf763b44fa0a6',
  measurementId: 'G-2NRKTDWX47',
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
