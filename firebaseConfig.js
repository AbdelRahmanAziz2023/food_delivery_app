// firebaseConfig.js
import { getApp, getApps, initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

// Optional — only if you need to initialize manually (rare case)
const firebaseConfig = {
  apiKey: "AIzaSyBdopCxmcsvw1vqWbXxbPT1Dha9Gvv8e_Y",
  authDomain: "food-delivery-app-612b3.firebaseapp.com",
  projectId: "food-delivery-app-612b3",
  storageBucket: "food-delivery-app-612b3.appspot.com",
  messagingSenderId: "524068236635",
  appId: "1:524068236635:android:86217752ae2b0be341fe7e",
};

// Initialize only if needed
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
