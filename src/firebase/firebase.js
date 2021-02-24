import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBJQyxxhZ61HQWrCu60chCBG2cBAn9bO4Q",
  authDomain: "pinterest-eb106.firebaseapp.com",
  projectId: "pinterest-eb106",
  storageBucket: "pinterest-eb106.appspot.com",
  messagingSenderId: "104226452636",
  appId: "1:104226452636:web:640b81f7785266550c6959",
};

const auth = firebase.auth();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { auth };
export default db;
