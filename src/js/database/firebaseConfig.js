import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYDMElaFd-Hgh-tb24zEJtuGIzkql_JzM',
  authDomain: 'stock-market-f6c0c.firebaseapp.com',
  databaseURL:
    'https://stock-market-f6c0c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'stock-market-f6c0c',
  storageBucket: 'stock-market-f6c0c.appspot.com',
  messagingSenderId: '1083292548424',
  appId: '1:1083292548424:web:f696c7aa525b22b976877d',
  measurementId: 'G-R4KR4X9FNK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
