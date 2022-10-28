import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC50fcKnkgpfFMpl1cA-fm_RUvliYpqA8w",
  authDomain: "sanibon-ecommerce.firebaseapp.com",
  projectId: "sanibon-ecommerce",
  storageBucket: "sanibon-ecommerce.appspot.com",
  messagingSenderId: "75805666249",
  appId: "1:75805666249:web:0763b32deb436081eb9618"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


