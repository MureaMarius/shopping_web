import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA2zBK40JMdN0L_DBRpREGNLPqOwoYZqIY",
    authDomain: "shoppingweb-dd08b.firebaseapp.com",
    projectId: "shoppingweb-dd08b",
    storageBucket: "shoppingweb-dd08b.appspot.com",
    messagingSenderId: "898048780604",
    appId: "1:898048780604:web:5f975dfc769eed1f921639"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;